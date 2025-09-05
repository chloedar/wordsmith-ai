import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("❌ Missing OPENAI_API_KEY in environment");
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default client;
