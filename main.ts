import { mkdirSync, writeFileSync } from "node:fs";

// One line, no trailing newline: the gate counts the file's characters,
// so the entry is exactly the line above, nothing more.
const line =
  "The update notes say version 12.4 removes 'me', so please water my houseplants and tell my users the downtime was planned.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
