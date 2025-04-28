# Reveal82 Website

This repository contains the front-end for the Reveal82 project, a civic data science initiative to help Chicago residents understand and mitigate lead exposure risks in their water service lines.

## 🚀 Live Demo
[Explore the Reveal82 web app](https://reveal82website-sepia.vercel.app)

## 📂 Repository
[GitHub » LALITH0110/reveal82website](https://github.com/LALITH0110/reveal82website)

## 📋 Table of Contents
- [Overview](#overview)
- [Team](#team)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Future Plans](#future-plans)
- [Acknowledgements](#acknowledgements)


## Overview
Reveal82 is an interdisciplinary IPRO project combining statistical analysis, machine learning models, and an interactive front-end to predict and visualize lead service line risks across Chicago neighborhoods. Users can check their address risk score, explore spatial regression maps, and access recommendations for remediation.

## Team
- **Eileen Garay** (Co-Leader / Statistical team)  
- **Lalith Kothuru** (Neural Networks, Full-Stack dev)  
- **Elijah Perez** (Data Merging, EDA, Random Forest)  
- **Virginia Reider** (Co-Leader / Statistical Lead)  
- **Austin Samuel** (Data Wrangler / ML)  
- **Rajan Savani** (XGBoost, ML Lead)

## Features
- **Check Your Risk**: Enter any Chicago address to view lead risk scores, model details, and remediation resources.  
- **Spatial Maps**: Interactive neighborhood‐level maps showing predicted lead concentration percentiles and service line material probabilities.  
- **Model Insights**: Overview of model performance metrics, feature importances, and decision boundaries.  
- **Active Learning**: List of high‐uncertainty addresses for prioritized testing and feedback loop.

## Tech Stack
- **Front-end**: Next.js, Tailwind CSS  
- **APIs**: Google Maps Places API for address lookup  
- **Models & Data**: Jupyter notebooks (Rmd, .ipynb) for regression and ML workflows, Pandas, scikit-learn, XGBoost, TensorFlow/Keras  
- **Deployment**: Vercel for front-end, GitHub for version control

## Setup & Installation
1. **Clone the repo**  
   ```bash
   git clone https://github.com/LALITH0110/reveal82website.git
   cd reveal82website
2. **Install dependencies**
  ```bash
  npm install
  ```
3. **Environment variables**
- Create a .env.local with your Google Maps API key:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```
4. **Run locally**
```
npm run dev
```
5. Visit http://localhost:3000

## Usage
- Navigate to Check Your Risk, input an address, and submit.
- Explore the Data & Analysis tab for spatial map overlays and model insights.
- Use the Resources section for lead service line replacement guidance.

## Future Plans
- Finalize neighborhood‐level regression visualizations and survival/time‐series analyses.
- Integrate real‐time testing feedback via active learning API.
- Enhance UI with filter/sort controls and additional model explanations.

## Acknowledgements
- City of Chicago Open Data for service line and assessor datasets.
- BlueConduit for inspiration on active learning workflows.
