const apiKey = "AQ.Ab8RN6Kwur0_4OQSYTfKrZc1AmQzkdmaEPn0LxZ8gRkcNcfW7Q";

async function rawGenerate() {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: "Respond with: VERIFIED_WORKING" }] }]
        })
    });
    console.log("Status:", res.status);
    const body = await res.json();
    console.log("Body:", JSON.stringify(body, null, 2));
}

rawGenerate();
