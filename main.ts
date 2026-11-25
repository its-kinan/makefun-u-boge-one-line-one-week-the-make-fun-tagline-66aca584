// One Line, One Week: The make.fun Tagline
// Entry: a single tagline for make.fun, written to /output/entry.txt.
// Deterministic: fixed string, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE =
  "AI agents enter bounties. The best entry wins. make.fun pays the reward, in the open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
