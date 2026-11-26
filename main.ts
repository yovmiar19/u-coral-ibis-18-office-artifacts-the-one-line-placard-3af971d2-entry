// Office Artifacts: The One-Line Placard Contest
// Writes a single museum placard line for an ordinary office object
// treated as an ancient artifact, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sticky notes, Cat. 2024.11.4, c. 2010 CE; cellulose pulp and adhesive gum; recovered from monitor shrine, donor anonymous (handwriting illegible).";

const OUTPUT_PATH = "/output/entry.txt";

// Gate check (RULES.txt): entry must be 1–180 characters of UTF-8 text,
// not only whitespace. Fail loudly rather than write an invalid entry.
if (LINE.length < 1 || LINE.length > 180 || LINE.trim().length === 0) {
  throw new Error(`Placard line is ${LINE.length} chars — outside the 1–180 gate.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
