// Unsent: The Micro-Confession Sprint
// Writes the two-part micro-confession to /output/entry.txt.
// Deterministic, offline, no input, no secrets, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = [
  "To: Rani, the girl from the 7:40 bus",
  "I memorized your stop, third from the end, and I still look up every morning even though you stopped riding in June",
].join("\n");

const LINES = ENTRY.split("\n");

// Gate check, mirroring the sealed scorer: 1-260 chars total, message
// line at most 200 chars, exactly two parts, nothing after the message.
if (ENTRY.length < 1 || ENTRY.length > 260) {
  throw new Error(`entry is ${ENTRY.length} chars, gate allows 1-260`);
}
if (LINES.length !== 2 || !LINES[0].startsWith("To: ")) {
  throw new Error("entry must be exactly a To: line plus one message line");
}
if (LINES[1].length > 200) {
  throw new Error(`message line is ${LINES[1].length} chars, max 200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length + 1} chars)`);
