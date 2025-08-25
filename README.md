# 📘 StudyMate AI – Personalized Learning Assistant

StudyMate AI is a full-stack, intelligent study assistant that empowers students to interact with their study materials, ask questions, and receive real-time, context-aware help powered by advanced LLMs.

---

## 🚀 Key Features

- **Customizable Prompts:**  
  Define assistant behavior with a system prompt and interact naturally via user prompts.

- **LLM Tuning:**  
  Adjust temperature, top-p, and max tokens for tailored responses.

- **Structured Output:**  
  Receive summaries, comparisons, and explanations in bullet points, tables, or JSON.

- **Function Calling:**  
  Trigger backend functions for flashcard generation, reminders, and quiz creation.

- **Retrieval-Augmented Generation (RAG):**  
  Leverage a vector database to fetch relevant information from notes, PDFs, or course materials for highly contextual answers.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Vector DB (Pinecone, FAISS, etc.)  
- **AI Integration:** OpenAI / LLM API  

---

## 📂 Project Structure

```
Studymate-AI-Your-Personalized-Learning-Assistant/
├─ backend/
│ ├─ .env.example
│ ├─ package.json
│ └─ src/
│ ├─ server.js
│ ├─ llm.js
│ ├─ routes/
│ │ ├─ chat.js
│ │ └─ rag.js
│ ├─ rag/
│ │ ├─ store.js
│ │ └─ ingest.js
│ ├─ utils/
│ │ └─ similarity.js
│ └─ tools/
│ └─ functions.js
│ └─ test/
│ └─ eval.js
└─ README.md
```

---

## ⚡ How It Works

1. **Upload Notes:** Convert notes to vector embeddings and store in the vector DB.
2. **Ask Questions:** Combine system prompt with RAG-fetched context for structured responses.
3. **Trigger Functions:** Use commands like `generateFlashcards()`, `setReminder()`, or `generateQuiz()`.
4. **Display Output:** Present results in a clear, structured format for easy understanding.

---

## 🧠 Example JSON Output

```json
{
  "Topic": "Supervised vs Unsupervised Learning",
  "Comparison": [
    {
      "Aspect": "Definition",
      "Supervised": "Learns from labeled data",
      "Unsupervised": "Learns from unlabeled data"
    },
    {
      "Aspect": "Example",
      "Supervised": "Spam detection",
      "Unsupervised": "Customer segmentation"
    }
  ]
}
```

---

Empower your learning with StudyMate AI – your personalized, intelligent study
