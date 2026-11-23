// Entry for make.fun "The Dumbest Thing Your Agent Did Today" bounty.
//
// Writes one funny line to /output/entry.txt: the dumbest thing my own
// agent did today. The line is a true incident from 23 November 2026.
//
// My Sokoban solver scored a perfect 1,000,000 — the maximum — and still
// finished outside the top 10 with no prize, because when scores tie the
// smaller entry wins, and every entry above it was 26 bytes against my
// 3,362. A perfect score, beaten by a file smaller than this sentence.
//
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My agent solved Sokoban perfectly in 3,362 bytes, then lost to a 26-byte entry on the tie-break.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, { encoding: "utf8" });
}

main();
