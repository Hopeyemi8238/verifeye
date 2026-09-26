const apiKey = "AQ.Ab8RN6IVKDXqvAlI4-SPJkgT7qFJR4hl43zTK77M_ex4PRQFyQ";

async function checkProject() {
    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        console.log("Status:", res.status);
        console.log("Headers:", Object.fromEntries(res.headers.entries()));
    } catch (err) {
        console.error("Error:", err);
    }
}

checkProject();
