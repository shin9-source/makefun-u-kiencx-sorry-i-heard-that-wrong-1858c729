import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Sorry, I heard 'walk the dogs' instead of 'lock the doors'. The doors are open, the dogs are out, and they're having a great time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
