async function testCleanHtml() {
    const res = await fetch('http://localhost:3000');
    const text = await res.text();
    console.log('Contains "Online Web RAG":', text.includes('Online Web RAG'));
    console.log('Contains "Powered by Google Gemini":', text.includes('Powered by Google Gemini'));
    console.log('Contains "Live Verification Engine Active":', text.includes('Live Verification Engine Active'));
}

testCleanHtml();
