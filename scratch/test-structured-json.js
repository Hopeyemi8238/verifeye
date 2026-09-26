require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const geminiApiKey = process.env.GEMINI_API_KEY?.trim();
const genAI = geminiApiKey ? new GoogleGenerativeAI(geminiApiKey) : null;

async function searchOnlineSources(query) {
    const results = [];
    const cleanQuery = query
        .replace(/^(is it true that|did|does|is|are|was|were|can)\s+/i, '')
        .replace(/[?!.]+$/g, '')
        .trim();

    try {
        const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(cleanQuery)}&utf8=&format=json&origin=*`;
        const wikiRes = await fetch(wikiUrl, { headers: { 'User-Agent': 'VerifEyeBot/1.0' } });
        if (wikiRes.ok) {
            const data = await wikiRes.json();
            const items = (data.query?.search || []).slice(0, 3);
            for (const item of items) {
                results.push({
                    source: 'Wikipedia',
                    title: item.title,
                    snippet: item.snippet
                        .replace(/<[^>]+>/g, '')
                        .replace(/&quot;/g, '"')
                        .replace(/&#039;/g, "'")
                        .replace(/&amp;/g, '&')
                });
            }
        }
    } catch (err) {
        console.error('Wikipedia search error:', err.message);
    }
    return results;
}

async function verifyClaim(claim, language = 'English') {
    const evidence = await searchOnlineSources(claim);
    const evidenceSummary = evidence.map((e, idx) => `[${idx + 1}] ${e.source} (${e.title}): ${e.snippet}`).join('\n');

    if (genAI) {
        try {
            const model = genAI.getGenerativeModel({
                model: "gemini-3.8-flash",
                generationConfig: { responseMimeType: "application/json" }
            });

            const prompt = `You are VerifEye, an expert AI civic and media fact-checking assistant (AIDF 2026).
Language: Respond in ${language}.
Claim to verify: "${claim}"

Online Evidence:
${evidenceSummary || '(No direct snippet)'}

Return a valid JSON object matching this schema:
{
  "truthStatus": "e.g. Verified Fact / True, False / Inaccurate, Fake Alert / Scam, or Unverified Rumor",
  "statusType": "verified | false | scam | unverified",
  "riskScore": 85,
  "riskLevel": "Low Risk | Moderate Risk | High Risk",
  "analysis": "Clear explanation of verified facts and real historical or civic truth",
  "sources": ["source 1", "source 2"],
  "civicAdvice": "Specific actionable advice on sharing or trusting this claim"
}`;

            const response = await model.generateContent(prompt);
            const data = JSON.parse(response.response.text());
            return data;
        } catch (err) {
            console.error("AI error:", err.message);
        }
    }

    return {
        truthStatus: "Unverified Claim",
        statusType: "unverified",
        riskScore: 50,
        riskLevel: "Moderate Risk",
        analysis: "Could not verify automatically.",
        sources: ["Web Search"],
        civicAdvice: "Exercise caution."
    };
}

async function test() {
    console.log("Testing JSON fact-check with Gemini...");
    const res = await verifyClaim("Nigeria gained independence in 2005");
    console.log(JSON.stringify(res, null, 2));
}

test();
