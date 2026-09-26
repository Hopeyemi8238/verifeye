const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = "AQ.Ab8RN6Kwur0_4OQSYTfKrZc1AmQzkdmaEPn0LxZ8gRkcNcfW7Q";

async function testGrounding() {
    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-3.8-flash",
            tools: [{ googleSearch: {} }]
        });

        const prompt = `Fact-check this claim: "Nigeria gained independence in 2005". Return a brief fact-check verdict.`;
        const result = await model.generateContent(prompt);
        console.log("=== GEMINI RESPONSE ===");
        console.log(result.response.text());
        
        const candidate = result.response.candidates?.[0];
        console.log("=== GROUNDING METADATA ===");
        console.log("Search queries:", candidate?.groundingMetadata?.webSearchQueries);
        console.log("Sources count:", candidate?.groundingMetadata?.groundingChunks?.length || 0);
    } catch (err) {
        console.error("Error with grounding:", err);
    }
}

testGrounding();
