"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = require("path");
const fs = require("fs");
const java = child_process_1.spawn("java", [
    "-jar",
    path_1.join("vendor", "plantuml-1.2021.13.jar"),
    "-v",
]);
java.stdout.on("data", (data) => console.log(`stdOut: ${data}`));
java.stderr.on("data", (data) => console.log(`stdErr: ${data}`));
java.on("close", (code) => console.info(`Process exited with code: ${code}...`));
fs.watchFile("./input.js", (curr, prev) => {
    console.info("Curr", curr);
    console.info("Prev", prev);
});
//# sourceMappingURL=main.js.map