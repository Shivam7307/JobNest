# 🧠 JobNest – Smart Job Recommendation System

**JobNest** is a full-stack web application that uses AI to recommend the most relevant job postings based on your resume. Built with the MERN stack and enhanced by machine learning, it streamlines the job search experience like never before.

---

## 🚀 Features

- Upload your resume and get the best-matched jobs instantly
- Real-time job posting data from platforms like Indeed
- AI-based ranking using transformer models and cosine similarity
- Clean, responsive UI built with Tailwind CSS
- Open-source and privacy-friendly

---

## 🛠️ Tech Stack

**Frontend:**
- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS

**Backend:**
- 🖥️ Node.js + Express
- 🗂️ MongoDB

**Machine Learning:**
- 🤖 AllMiniLM-L6-v2 (text embedding)
- 📊 Cosine Similarity (NumPy, SciKit-Learn)

---

## 📁 Project Structure

```bash
JobNest/
├── client/         # Frontend (React + Tailwind)
├── server/         # Backend (Express + ML Integration)
│   └── ml/         # Python scripts for resume-job matching
├── README.md
└── .gitignore
