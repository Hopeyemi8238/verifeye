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

async function verifyClaim(claim) {
    console.log(`[Testing] Verifying claim: "${claim}"`);
    const evidence = await searchOnlineSources(claim);
    console.log(`[Testing] Retrieved ${evidence.length} sources`);

    const model = genAI.getGenerativeModel({ model: "gemini-3.8-flash" });
    const evidenceSummary = evidence.map((e, idx) => `[${idx + 1}] ${e.source} (${e.title}): ${e.snippet}`).join('\n');

    const prompt = `You are VerifEye, an expert AI civic and media fact-checking assistant (AIDF 2026).
A user on WhatsApp sent the following claim or question to verify:
"${claim}"

Live online search evidence gathered:
${evidenceSummary || '(No direct snippet found)'}

TASK:
Fact-check this claim thoroughly using online verified facts, historical records, and credible knowledge.
Return a structured WhatsApp verification report strictly matching this format:

📝 *VerifEye Online Fact-Check Report*:

• *Claim Analyzed*: "${claim}"
• *Truth Status*: [e.g. ✅ Verified Fact / True OR ❌ False / Inaccurate OR ⚠️ Unverified Rumor OR ❌ Fake Scam Alert]
• *Misinformation Risk*: [e.g. 10% (Low Risk) or 95% (High Risk)]

💡 *Verified Facts & Analysis*: [Explain clearly what the actual truth is]
• *Verified Sources*: [e.g. Official Historical Records / Constitution of Nigeria / Wikipedia / Reputable News]
• *Civic Advice*: [Concise advice for the user on whether to trust or share this claim]

Keep the response concise, punchy, and formatted with WhatsApp markdown (*bold* and bullet points).`;

    const response = await model.generateContent(prompt);
    return response.response.text().trim();
}

async function run() {
    const report = await verifyClaim("Nigeria gained independence in 2005");
    console.log("\n--- RESULT REPORT ---\n");
    console.log(report);
}

run();
