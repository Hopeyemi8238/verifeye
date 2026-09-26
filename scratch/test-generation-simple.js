const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = "AQ.Ab8RN6Kwur0_4OQSYTfKrZc1AmQzkdmaEPn0LxZ8gRkcNcfW7Q";
const genAI = new GoogleGenerativeAI(apiKey);

async function testGeneration() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const res = await model.generateContent("Fact check in 1 sentence: Did Nigeria gain independence in 1960?");
        console.log("gemini-2.5-flash SUCCESS:", res.response.text());
    } catch (err) {
        console.log("gemini-2.5-flash failed:", err.message);
    }

    try {
        const model38 = genAI.getGenerativeModel({ model: "gemini-3.8-flash" });
        const res = await model38.generateContent("Fact check in 1 sentence: Did Nigeria gain independence in 1960?");
        console.log("gemini-3.8-flash SUCCESS:", res.response.text());
    } catch (err) {
        console.log("gemini-3.8-flash failed:", err.message);
    }
}

testGeneration();
