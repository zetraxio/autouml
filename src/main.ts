import { spawn } from "child_process";
import { join } from "path";
import * as fs from "fs";

const java = spawn("java", [
  "-jar",
  join("vendor", "plantuml-1.2021.13.jar"),
  "-v",
]);

java.stdout.on("data", (data) => console.log(`stdOut: ${data}`));
java.stderr.on("data", (data) => console.log(`stdErr: ${data}`));
java.on("close", (code) =>
  console.info(`Process exited with code: ${code}...`)
);

fs.watchFile("./input.js", (curr, prev) => {
  console.info("Curr", curr);
  console.info("Prev", prev);
});
