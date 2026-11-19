// main.ts — entry program for the make.fun bounty "gta6-meme-x-01".
//
// The whole job of this program is to hand the house the address of the X
// post that is this entry. The repository root holds POST.json with that
// address; this program copies it, byte for byte, into the output directory
// the grader points at. It does nothing else: no network, no clock, no
// files outside the repository, so two runs always write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The program first reads POST.json and checks it is a JSON object whose
// url is a real X post address; a malformed entry should fail loudly here
// instead of silently handing the house a bad file.
const sourcePath = join(botDir, "POST.json");
const parsed = JSON.parse(readFileSync(sourcePath, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url field");
}
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/.test(parsed.url)) {
  throw new Error(`POST.json url is not an X post address: ${parsed.url}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, join(outputDir, "POST.json"));
