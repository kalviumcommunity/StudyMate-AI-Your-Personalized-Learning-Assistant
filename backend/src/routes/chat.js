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

export default r;