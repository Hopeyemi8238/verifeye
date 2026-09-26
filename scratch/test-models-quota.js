const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = "AQ.Ab8RN6LiK-xMf6Y58nxpzHddB1RmsJQKW3pIiIgiBMrpRcsuiQ";
const genAI = new GoogleGenerativeAI(apiKey);

async function testModel(modelName) {
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const res = await model.generateContent("Respond with OK");
        console.log(`[${modelName}] Success:`, res.response.text());
        return true;
    } catch (err) {
        console.log(`[${modelName}] Failed:`, err.message);
        return false;
    }
}

async function testAll() {
    const modelsToTry = [
        "gemini-2.5-flash-lite",
        "gemini-3.1-flash-lite",
        "gemini-flash-latest",
        "gemini-flash-lite-latest",
        "gemini-3-flash-preview",
        "gemini-3.5-flash-lite"
    ];

    for (const m of modelsToTry) {
        await testModel(m);
    }
}

testAll();
