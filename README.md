# 🪙 Coin Client App

A simple React + Vite web application that allows users to input a **target amount** and a list of **coin denominations** to compute the **minimum number of coins needed**.

> 🔗 This app interfaces with a separate **backend REST API**, built using Dropwizard (available in another repository).

## 📦 Tech Stack

- Frontend: React + Vite
- Backend: REST API Webservice in Dropwizard Application 
- Containerization: Docker
- Deployment (Partial): Google Cloud Run
  
## 🧩 Prerequisites

- Ensure the backend API is running:
  - You can **run it locally** from the Dropwizard backend repo running in localhost:8080, **or**
  - Use the **deployed public API endpoint** (provided in the submission.json file) 



## 🛠️ Running the App Locally (Development Mode)

- npm install
- npm run dev

### How to build the docker image?
- docker build -t coin-client-app .
- docker run -p 5173:5173 coin-client-app
> make sure the backend is running if not, the submit button will not result anything

## To easily run the docker image created already in docker hub : 
- docker pull haffydockerid/coin-client-app:latest
- docker run -p 5173:5173 haffydockerid/coin-client-app

