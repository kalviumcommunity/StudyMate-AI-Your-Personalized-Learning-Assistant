import { Router } from "express";
import { chatComplete } from "../llm.js";

const r = Router();

r.post("/basic", async (req, res, next) => {
  try {
    const { system, user } = req.body;
    const result = await chatComplete({ system, user });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

r.post("/prompt-demo", async (req, res, next) => {
  try {
    const { mode, topic, difficulty } = req.body; 
    const baseSystem = "You are StudyMate, explain clearly in 2 lines.";

    const examples = {
      one: [
        { role: "user", content: "Explain overfitting in one line." },
        { role: "assistant", content: "Overfitting memorizes training data, failing on new data." },
      ],
      multi: [
        { role: "user", content: "Explain overfitting in one line." },
        { role: "assistant", content: "Overfitting memorizes training data, failing on new data." },
        { role: "user", content: "Explain underfitting in one line." },
        { role: "assistant", content: "Underfitting fails to learn even simple patterns." },
      ],
    };

    let messages = [{ role: "system", content: baseSystem }];

    if (mode === "one") messages = messages.concat(examples.one);
    if (mode === "multi") messages = messages.concat(examples.multi);

    // Dynamic Prompting: User sets difficulty level → prompt changes dynamically
    let userPrompt = `Explain: ${topic}. Keep it brief.`;
    if (mode === "dynamic") {
      if (difficulty === "easy") userPrompt = `Explain ${topic} like I'm 10 years old.`;
      if (difficulty === "medium") userPrompt = `Explain ${topic} for college students.`;
      if (difficulty === "hard") userPrompt = `Explain ${topic} for experts with technical depth.`;
    }

    messages.push({ role: "user", content: userPrompt });

    const result = await chatComplete({ messages, temperature: 0.3 });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

export default r;
