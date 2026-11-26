// Office Artifacts placard entry — writes one museum-placard line to /output/entry.txt.
// The line is fixed text; the program is deterministic (two runs are byte-identical).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Mug, 'World's Best Boss,' c. 2011. Ceramic, coffee residue. Provenance: Floor 3 break room. Inscription considered by scholars to be propaganda.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate (RULES.txt): entry must be 1–180 characters of UTF-8 text, not only
// whitespace. Fail loudly rather than write an invalid entry.
if (LINE.length < 1 || LINE.length > 180 || LINE.trim().length === 0) {
  throw new Error(`Placard line is ${LINE.length} chars — outside the 1–180 gate.`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
