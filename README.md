# AI Feedback Classifier

An NLP-based customer support ticket classifier that automatically categorizes customer feedback into different support categories.

## Overview

This project uses Natural Language Processing (NLP), TF-IDF feature extraction, and Logistic Regression to classify customer support tickets into five categories:

- Billing inquiry
- Cancellation request
- Product inquiry
- Refund request
- Technical issue

The model uses both the ticket subject and ticket description as input.

## Dataset

The dataset contains customer support tickets with their corresponding ticket types.

After data cleaning and label correction:

- Total clean samples: 8,040
- Training samples: 6,432
- Testing samples: 1,608
- Classes: 5

The five ticket categories are:

- Technical issue
- Product inquiry
- Billing inquiry
- Refund request
- Cancellation request

## Approach

The project follows a typical machine learning pipeline:

1. Data exploration
2. Data cleaning
3. Label validation and correction
4. Text preprocessing
5. Combining ticket subject and description
6. TF-IDF feature extraction
7. Logistic Regression classification
8. Model evaluation
9. Saving the trained model and vectorizer
10. Command-line prediction

## Model

**Algorithm:** Logistic Regression

**Text Vectorization:** TF-IDF

**Input:** Ticket Subject + Ticket Description

**Output:** Predicted Ticket Type

## Results

The final model was trained using the corrected dataset labels.

## Results

The final model achieved 100% accuracy on the held-out test set.

- Training samples: 6,432
- Testing samples: 1,608
- Features: 10,000
- Testing accuracy: 100%

The dataset used in this project is synthetic, and the ticket labels were corrected during the data exploration stage using the ticket subject and text patterns. Therefore, the 100% test accuracy should not be interpreted as equivalent to real-world production performance.

Further evaluation on a larger, independently collected dataset would be necessary to measure real-world generalization.


**Overall accuracy: 1.00**

> Note: The dataset contains synthetic customer support examples, and the labels were validated and corrected during the data exploration stage. Therefore, the 100% test accuracy should not be interpreted as equivalent to real-world production performance. Testing on a larger, independently collected dataset would be necessary to evaluate real-world generalization.

## Example Prediction

The project includes a command-line prediction script.

Example input:

```text
Enter ticket subject: Refund request

Enter ticket description: I was charged twice for my purchase and need a refund.
