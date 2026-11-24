import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, in the 5-7-5 syllable shape.
// Line 1 (5): stack(1) trace(1) three(1) a.m.(2)
// Line 2 (7): each(1) frame(1) blames(1) the(1) one(1) be-low(2)
// Line 3 (5): no(1) one(1) con-fess-es(3)
const haiku = [
  "stack trace, three a.m.",
  "each frame blames the one below",
  "no one confesses",
].join("\n");

const text = haiku + "\n";

// The gate allows 1 to 200 characters; refuse to write an invalid entry.
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry is ${text.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
