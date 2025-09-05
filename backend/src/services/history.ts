export interface HistoryEntry {
  timestamp: string;
  operation: string;
  input: string;
  output: string;
  tone?: string;
}

const history: HistoryEntry[] = [];

export function addHistory(entry: HistoryEntry) {
  history.unshift(entry); // newest first
  if (history.length > 50) history.pop(); // keep last 50 entries
}

export function getHistory() {
  return history;
}
