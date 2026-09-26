const apiKey = "AQ.Ab8RN6LiK-xMf6Y58nxpzHddB1RmsJQKW3pIiIgiBMrpRcsuiQ";

async function listAllModels() {
    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await res.json();
        console.log("Models:", data.models?.map(m => m.name));
    } catch (err) {
        console.error("Error:", err);
    }
}

listAllModels();
