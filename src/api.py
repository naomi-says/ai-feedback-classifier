from pathlib import Path
import joblib
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

BASE_DIR = Path(__file__).resolve().parent.parent

model = joblib.load(BASE_DIR / "models" / "logistic_model.pkl")
vectorizer = joblib.load(BASE_DIR / "models" / "tfidf_vectorizer.pkl")

app = FastAPI(
    title="AI Customer Support Ticket Classifier",
    description="API for classifying customer support tickets using NLP",
    version="1.0.0"
)
app.mount("/app", StaticFiles(directory=BASE_DIR / "frontend", html=True), name="frontend")

class Ticket(BaseModel):
    subject: str
    description: str


@app.get("/")
def home():
    return {
        "message": "Customer Support Ticket Classifier API is running"
    }


@app.post("/predict")
def predict(ticket: Ticket):
    text = ticket.subject + " " + ticket.description

    text_tfidf = vectorizer.transform([text])

    prediction = model.predict(text_tfidf)[0]

    probabilities = model.predict_proba(text_tfidf)[0]
    classes = model.classes_

    class_probabilities = {
        class_name: round(float(prob), 4)
        for class_name, prob in zip(classes, probabilities)
    }

    return {
        "predicted_ticket_type": prediction,
        "confidence": round(float(max(probabilities)), 4),
        "class_probabilities": class_probabilities
    }