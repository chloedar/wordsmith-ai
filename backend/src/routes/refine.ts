import { Router } from "express";
import client from "../services/openai";
import { addHistory } from "../services/history";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Refine grammar and clarity of the text." },
        { role: "user", content: text },
      ],
    });

    const refined = completion.choices[0].message?.content || "";

    // store in history
    addHistory({
      timestamp: new Date().toISOString(),
      operation: "refine",
      input: text,
      output: refined,
    });

    res.json({ refined });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to refine text" });
  }
});

export default router;
