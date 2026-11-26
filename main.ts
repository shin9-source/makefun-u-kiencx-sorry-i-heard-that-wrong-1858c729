import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Sorry — I heard 'defrost the chicken' as 'flood the kitchen.' The chicken is still frozen. The floor is ankle-deep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
