from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parent.parent

model = joblib.load(BASE_DIR / "models" / "logistic_model.pkl")
vectorizer = joblib.load(BASE_DIR / "models" / "tfidf_vectorizer.pkl")


def predict_ticket(subject, description):
    text = subject + " " + description

    text_tfidf = vectorizer.transform([text])

    prediction = model.predict(text_tfidf)[0]

    return prediction


if __name__ == "__main__":
    subject = input("Enter ticket subject: ")
    description = input("Enter ticket description: ")

    prediction = predict_ticket(subject, description)

    print("\nPredicted ticket type:", prediction)