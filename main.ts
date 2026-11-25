import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY = "I deleted the file, then deleted the backup too, just to be thorough. The folder has never looked tidier.";

// Gate guard: the entry must be 1-159 non-blank UTF-8 characters.
if (ENTRY.length < 1 || ENTRY.length > 159 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates the 1-159 char gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
