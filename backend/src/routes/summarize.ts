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
        { role: "system", content: "Summarize the text clearly and concisely." },
        { role: "user", content: text },
      ],
    });

    const summary = completion.choices[0].message?.content || "";

    // Store in history
    addHistory({
      timestamp: new Date().toISOString(),
      operation: "summarize",
      input: text,
      output: summary,
    });

    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to summarize text" });
  }
});

export default router;
