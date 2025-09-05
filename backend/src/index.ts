import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Load env vars
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.use(cors())
app.use(express.json());

// Routes
import refineRoute from "./routes/refine";
import summarizeRoute from "./routes/summarize";
import paraphraseRoute from "./routes/paraphrase";
import toneRoute from "./routes/tone";
import historyRoute from "./routes/history";

app.use("/refine", refineRoute);
app.use("/summarize", summarizeRoute);
app.use("/paraphrase", paraphraseRoute);
app.use("/tone", toneRoute);
app.use("/history", historyRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
