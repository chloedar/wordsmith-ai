import { Router } from "express";
import client from "../services/openai";
import { addHistory } from "../services/history";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { text, tone } = req.body;
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: `Rewrite the text in a ${tone} tone.` },
        { role: "user", content: text },
      ],
    });

    const rewritten = completion.choices[0].message?.content || "";

    // Store in history
    addHistory({
      timestamp: new Date().toISOString(),
      operation: "tone",
      input: text,
      output: rewritten,
      tone,
    });

    res.json({ rewritten });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to rewrite in given tone" });
  }
});

export default router;
