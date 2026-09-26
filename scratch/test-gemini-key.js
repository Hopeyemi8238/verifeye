const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = "AQ.Ab8RN6LiK-xMf6Y58nxpzHddB1RmsJQKW3pIiIgiBMrpRcsuiQ";

async function testKey() {
    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello, respond with 'OK'");
        console.log("Success:", result.response.text());
    } catch (err) {
        console.error("Error testing key:", err.message);
    }
}

testKey();
