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

        let probabilitiesHTML = "";

        for (const [category, probability] of Object.entries(data.class_probabilities)) {
            probabilitiesHTML += `
                <div class="probability">
                    <div class="probability-label">
                        <span>${category}</span>
                        <span>${(probability * 100).toFixed(2)}%</span>
                    </div>

                    <div class="bar">
                        <div class="bar-fill" style="width: ${probability * 100}%"></div>
                    </div>
                </div>
            `;
        }

        result.innerHTML = `
            <div class="prediction">
                <strong>Predicted Type</strong>
                <span>${data.predicted_ticket_type}</span>
            </div>

            <div class="confidence">
                Confidence: ${(data.confidence * 100).toFixed(2)}%
            </div>

            <h3>Category Probabilities</h3>

            ${probabilitiesHTML}
        `;

    } catch (error) {
        result.textContent = "Could not connect to the API.";
        console.error(error);
    }
}