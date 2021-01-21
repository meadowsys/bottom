// @ts-check
"use strict";

if (!process.env.FOLDERNAME) {
   process.env.CI && (void console.error("no folder name provided (and this is CI), aborting") || process.exit(1));
   process.env.FOLDERNAME = "";
}

const fs = require("fs-extra");
const { Application, TSConfigReader } = require("typedoc");

const app = new Application();
const input = ["./src/bottom.ts"];
const outdir = "docs";
const out = `${outdir}/${process.env.FOLDERNAME}`;
const isreleasebuild = process.env.CI ? process.env.GITHUB_REF.includes("/tag") : false;

app.options.addReader(new TSConfigReader);

app.bootstrap({
   entryPoints: input,
   out: out,
   excludePrivate: true,
   includeVersion: isreleasebuild,
   listInvalidSymbolLinks: true
});

const project = app.convert();
if (project) app.generateDocs(project, out).catch((...err) => void console.error(...err) || (process.exitCode = 1)).then(() => {
   if (isreleasebuild) {
      // also put it in folder "latest"
      fs.copySync(`${outdir}/${process.env.FOLDERNAME}`, `${outdir}/latest`, {
         errorOnExist: true
      });
   }
});
