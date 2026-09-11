# AI Customer Support Ticket Classifier

I built this project to understand how NLP and machine learning can be used to automatically categorize customer support tickets.

The user enters a ticket subject and description, and the application predicts what type of support request it is.

The five categories are:

- Billing inquiry
- Cancellation request
- Product inquiry
- Refund request
- Technical issue

## Live Demo

https://ai-feedback-classifier.onrender.com/app/

## What I used

- Python
- Pandas
- NumPy
- Scikit-learn
- TF-IDF
- Logistic Regression
- FastAPI
- HTML, CSS and JavaScript
- GitHub
- Render

## How it works

The ticket subject and description are combined and cleaned before being converted into numerical features using TF-IDF.

A Logistic Regression model then uses those features to predict the ticket category.

I saved the trained model and TF-IDF vectorizer using joblib and connected them to a FastAPI backend.

The frontend sends the ticket to the API and displays the prediction, confidence, and probability for each category.

## Model

The final model achieved 100% accuracy on the test set.

- Training data: 6,432 tickets
- Test data: 1,608 tickets
- Total cleaned data: 8,040 tickets

### Important note

The dataset is synthetic. During the project, I found that some of the original labels did not match the ticket subjects, so I analyzed and corrected the labels before training the final model.

Because of this, the 100% accuracy should not be considered real-world performance. A real customer support dataset would be needed for a proper evaluation.

## Project Structure

```text
ai-feedback-classifier/
├── data/
├── models/
├── notebooks/
├── src/
│   ├── api.py
│   └── predict.py
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .gitignore
├── .python-version
├── README.md
└── requirements.txt

What I learned:Through this project I worked with:

Cleaning and exploring a real-world-style dataset
Text preprocessing
TF-IDF
Text classification
Model evaluation
Building a FastAPI API
Connecting a frontend to an ML model
Deploying a Python application using Render
Future Improvements

I would like to test the model on a real customer support dataset, improve the confidence scores, and eventually try more advanced NLP models.

Author:Naomi Dsouza
