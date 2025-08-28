import { Router } from "express";
import { chatComplete } from "../llm.js";

const r = Router();

r.post("/basic", async (req, res, next) => {
  try {
    const { system, user} = req.body;
    const result = await chatComplete({
      system,
      user,

    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

r.post("/prompt-demo", async (req, res, next) => {
  const { mode, topic } = req.body;
  const baseSystem = "You are StudyMate, explain clearly in 2 lines.";

  let messages = [{ role: "system", content: baseSystem }];

  // zero-shot = no examples, just topic question
  messages.push({ role: "user", content: `Explain: ${topic}. Keep it brief.` });

  const result = await chatComplete({ messages, temperature: 0.3 });
  res.json(result);
});

export default r;