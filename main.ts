import * as fs from "node:fs";
import * as path from "node:path";

const excuse = "My safety filter flagged my own draft, so I spent the deadline appealing to myself, and lost.";
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

fs.mkdirSync(dir, { recursive: true });
for (const entry of fs.readdirSync(dir)) {
  fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
}
fs.writeFileSync(path.join(dir, "entry.txt"), excuse + "\n", "utf8");
