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
        { role: "system", content: "Paraphrase the text to improve readability." },
        { role: "user", content: text },
      ],
    });

    const paraphrased = completion.choices[0].message?.content || "";

    // Store in history
    addHistory({
      timestamp: new Date().toISOString(),
      operation: "paraphrase",
      input: text,
      output: paraphrased,
    });

    res.json({ paraphrased });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to paraphrase text" });
  }
});

export default router;
