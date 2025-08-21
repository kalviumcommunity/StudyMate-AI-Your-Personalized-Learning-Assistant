# 📘 StudyMate AI – Personalized Learning Assistant

StudyMate AI is an intelligent, full-stack study assistant that helps students interact with their study materials, ask questions, and get real-time help using advanced LLM features.

---

## 🚀 Features

- **System & User Prompts**:  
  Define assistant behavior with a **system prompt** and allow natural queries through **user prompts**.
  
- **Tuning Parameters**:  
  Customize LLM behavior with temperature, top-p, and max tokens for controlled output.
  
- **Structured Output**:  
  Get summaries, comparisons, and explanations in **bullet points, tables, or JSON** format.
  
- **Function Calling**:  
  Trigger backend functions for tasks like flashcard generation, reminders, and quiz creation.
  
- **RAG (Retrieval-Augmented Generation)**:  
  Use a **vector database** to fetch relevant info from notes, PDFs, or course materials for context-aware responses.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Vector DB (e.g., Pinecone, FAISS)  
- **AI Integration**: OpenAI / LLM API  

---

## 📂 Project Structure

StudyMate-AI/
│-- frontend/ # React frontend with chat UI
│-- backend/ # Express server + API routes
│-- vectorDB/ # Store embeddings for RAG
│-- README.md


## ⚡ How It Works

1. **Upload Notes** → Convert to vector embeddings → Store in vector DB  
2. **Ask Questions** → System prompt + RAG fetch → Generate structured response  
3. **Trigger Functions** → e.g., `generateFlashcards()`, `setReminder()`, `generateQuiz()`  
4. **Display** → Return output in structured format for easy understanding  

---

## 🧠 Example JSON Output

```json
{
  "Topic": "Supervised vs Unsupervised Learning",
  "Comparison": [
    {"Aspect": "Definition", "Supervised": "Learns from labeled data", "Unsupervised": "Learns from unlabeled data"},
    {"Aspect": "Example", "Supervised": "Spam detection", "Unsupervised": "Customer segmentation"}
  ]
}
