# AI Feedback Classifier

An NLP-based customer support ticket classifier that automatically categorizes customer feedback into different support categories.

## Overview

This project uses Natural Language Processing (NLP) and Logistic Regression to classify customer support tickets into five categories:

- Billing inquiry
- Cancellation request
- Product inquiry
- Refund request
- Technical issue

The model uses both the ticket subject and ticket description as input.

## Dataset

The dataset contains customer support tickets with their corresponding ticket types.

After data cleaning:

- Total clean samples: 8,040
- Training samples: 6,432
- Testing samples: 1,608
- Classes: 5

The training and testing datasets maintain a consistent distribution across all five ticket categories.

## Approach

The project follows a typical machine learning pipeline:

1. Data exploration
2. Data cleaning
3. Text preprocessing
4. Combining ticket subject and description
5. TF-IDF feature extraction
6. Logistic Regression classification
7. Model evaluation
8. Saving the trained model and vectorizer
9. Command-line prediction

## Model

**Algorithm:** Logistic Regression

**Text Vectorization:** TF-IDF

**Input:** Ticket Subject + Ticket Description

**Output:** Predicted Ticket Type

## Results

The final model achieved approximately:

- Training accuracy: 71.19%
- Testing accuracy: 20.58%

The large difference between training and testing accuracy indicates that the current model does not generalize well to unseen data. This is an important limitation of the current implementation and provides an opportunity for further improvement.

## Project Structure

```text
ai-feedback-classifier/
│
├── data/
│   └── raw/
│       └── customer_support_tickets.csv
│
├── models/
│   ├── logistic_model.pkl
│   └── tfidf_vectorizer.pkl
│
├── notebooks/
│   └── 01_data_exploration.ipynb
│
├── src/
│   └── predict.py
│
├── .gitignore
├── README.md
└── requirements.txt
