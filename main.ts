import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Sorry, I heard 'dim the lights' as 'gym the lights' and ordered forty dumbbells. They're in the living room, and they suit you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
