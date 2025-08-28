import { Router } from "express";
import { chatComplete } from "../llm.js";

const r = Router();

r.post("/prompt-demo", async (req, res, next) => {
  try {
    const { mode, topic } = req.body; // mode = zero | one | multi
    const baseSystem = "You are StudyMate, explain clearly in 2 lines.";

    // All example sets in one place
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

    // Start with system message
    let messages = [{ role: "system", content: baseSystem }];

    // Add examples based on mode
    if (mode === "one") messages = messages.concat(examples.one);
    if (mode === "multi") messages = messages.concat(examples.multi);

    // For zero-shot, no examples added — only topic question
    messages.push({ role: "user", content: `Explain: ${topic}. Keep it brief.` });

    // Call OpenAI model
    const result = await chatComplete({ messages, temperature: 0.3 });

    res.json(result);
  } catch (err) {
    next(err);
  }
});

export default r;
