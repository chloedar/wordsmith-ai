

# WordSmith AI

A web application that refines, summarizes, paraphrases, or rewrites text using OpenAI's API. It also keeps a history of past operations, making it a lightweight Grammarly-style assistant.

---

## Features

- **Refine:** Improve grammar and clarity.
- **Summarize:** Condense long text into concise summaries.
- **Paraphrase:** Reword text for better readability.
- **Tone Adjustment:** Rewrite text in a specific tone (e.g., casual, formal).
- **History:** Stores the last 50 operations with timestamp, input, output, and tone.
- **Copy-to-Clipboard:** Copy outputs or past results easily.

---


## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running.
- OpenAI API key.

---

## Setup

1. Create a `.env` file at the root with your OpenAI API key(or you can use your host environment variable directly):

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx

2. Make sure Docker Desktop is running.

From project root run: docker-compose up --build

Backend: http://localhost:3000
Frontend: http://localhost:3001

Open http://localhost:3001 in your browser.
Enter text, select an operation (Refine, Summarize, Paraphrase, Tone), and click Submit.

View the result below and copy it using the Copy button.

The History panel shows the last 50 operations with inputs, outputs, timestamps, and optional tones.
