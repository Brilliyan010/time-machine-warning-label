// Funniest Time Machine Warning Label — entry for make.fun
// Writes a single warning label (120 characters or fewer) to /output/entry.txt.
// The label is a fixed string: deterministic by construction, so every run
// produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: Do not change the past. Someone already did. You are the reason.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
