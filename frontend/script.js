
async function predictTicket() {
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;
    const result = document.getElementById("result");

    if (!subject || !description) {
        result.textContent = "Please enter both subject and description.";
        return;
    }

    result.textContent = "Predicting...";

    try {
        const response = await fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject: subject,
                description: description
            })
        });

        const data = await response.json();

        result.innerHTML = `
            Predicted Type: ${data.predicted_ticket_type}<br>
            Confidence: ${(data.confidence * 100).toFixed(2)}%
        `;

    } catch (error) {
        result.textContent = "Could not connect to the API.";
        console.error(error);
    }
}