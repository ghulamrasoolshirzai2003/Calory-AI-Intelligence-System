# 🥗 Calory AI: Intelligence System
**Advanced Health-Tech Architecture with AI-Powered Nutritional Analysis & Automated Workflows**

Calory AI is an intelligent, full-stack health platform designed to automate the complex process of nutritional tracking. By integrating **Google Gemini AI** for natural language meal analysis and **n8n** for backend workflow orchestration, the system provides a "zero-effort" tracking experience, synchronized in real-time via a **Firebase** cloud foundation.



---

## 🏗️ System Architecture & Logic
The platform is built on a serverless, event-driven stack designed for high performance, real-time responsiveness, and intelligent data processing.

### 1. The Automation Engine (n8n)
* **Workflow Orchestration:** Custom n8n nodes act as the system's "central nervous system," routing data between the User Interface and the AI processing layers without manual server intervention.
* **AI Integration:** Seamlessly routes user meal descriptions to the Gemini AI API to extract precise caloric and macronutrient data from unstructured text.

### 2. Cloud Infrastructure (Firebase)
* **Real-Time Data Layer:** Leverages Firestore for sub-second synchronization of user logs, personal metrics, and health trends.
* **Authentication Engine:** Secure user entry and personalized session management handled through dedicated authentication workflows.
* **Scalable Hosting:** Optimized delivery via Firebase Hosting for global accessibility.

---

## ✨ Feature Modules
* **Smart Onboarding Engine:** Multi-step collection of personal metrics (`onboarding__personal_metrics.html`) and activity levels to calculate personalized BMR and TDEE targets.
* **AI Meal Analysis:** Advanced text-to-data engine (`ai_meal_analysis.html`) that allows users to log meals naturally—the AI handles the math.
* **Visual Intelligence Dashboard:** A unified, high-fidelity view of daily progress, caloric targets, and historical health trends (`history_&_trends_view.html`).
* **Premium Ecosystem:** Integrated Pro-Upgrade logic (`pro_upgrade_modal.html`) showcasing a scalable monetization architecture.

---

## 🛠️ Technical Stack
* **Frontend:** HTML5, CSS3 (Modern Glassmorphism UI), JavaScript (ES6+).
* **AI Engine:** Google Gemini AI (Generative Language Models).
* **Automation:** n8n (Workflow Automation Tool).
* **Backend & Cloud:** Firebase (Firestore, Auth, Hosting).

---

## 📁 Technical Directory Structure
```text
├── public/              # Core Application Interface
│   ├── index.html       # Landing Page
│   ├── onboarding/      # Goal Selection & Metric Collection
│   └── dashboard/       # Real-time Analysis & History Views
├── js/                  # Logic Layer (Firebase Config & AI Logic)
├── n8n-workflows/       # Exported JSON Automation Nodes
├── firebase.json        # Cloud Deployment Configuration
└── README.md            # Comprehensive Documentation
```
Professional Context
This project serves as a key demonstration of AI-Driven Software Engineering. It showcases the ability to manage complex cloud integrations, automated backend logic, and real-time data synchronization in a modern health-tech context.

👨‍💻 Developed By
Ghulam Rasool Shirzai
