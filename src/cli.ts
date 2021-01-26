import Bottom from "./bottom";
import mri from "mri";
import { readFileSync, writeFileSync } from "fs";

const usedefaultstring = "u3u__sprouts";
const opts = mri(process.argv.slice(2), {
   alias: {
      h: "help",
      v: "version",
      b: "bottomify",
      r: "regress",
      i: "input",
      o: "output"
   },
   default: {
      h: false,
      v: false,
      b: true,
      r: false,
      i: usedefaultstring,
      o: usedefaultstring
   },
   unknown: flag => void console.error(`unknown flag: ${flag}\nif thats a part of your input text, use -- to stop command line arg parsing`) || process.exit(1)
}) as {
   // typechecking is :ok_hand_skin_tone_gaga:
   _: Array<string>;
   b: boolean;
   r: boolean;
   i: string;
   o: string;
   h: boolean;
   v: boolean;
};

// for webpack define plugin
declare const VERSION: string, NAME: string, GITHUB_USER: string, LICENSE: string;

const help = `
Bottom translator v${VERSION}
fantastic (maybe) CLI for translating between bottom and human-readable text
Copyright (c) ${NAME} (${GITHUB_USER} on Github) under ${LICENSE} license

USAGE: bottom [command] [options] <text...>

COMMANDS:
   -b,  --bottomify        translate regular text into bottom (default operation)
   -r,  --regress          translate bottom into regular text (futile)
   -h,  --help             display this help text and exit
   -v,  --version          prints the version and exits

OPTIONS:
   -i,  --input <INPUT>    input file, defaults to commandline args
   -o,  --output <OUTPUT>  output file, defaults to stdout

ARGS:
   <text...>               the text to convert, not used if input specified

EXAMPLES:
   bottom hai
      converts "hai" into bottom text

   bottom -o lol.txt hai
      converts "hai" into bottom text, and dumps it into a file called "lol.txt"

NOTE: smol
`.trim();

// handle help and version
opts.h && (void console.log(help) || process.exit());
opts.v && (void console.log(`v${VERSION}`) || process.exit());

// fetch input
const input: string = opts.i !== usedefaultstring
   ? readFileSync(opts.i).toString()
   : opts._.join(" ");

// fetch output location
const output: (txt: string) => any = opts.o !== usedefaultstring
   ? txt => writeFileSync(opts.o, txt)
   : console.log;

// try to regress, fail if doesnt work
try {
   opts.r && (output(Bottom.decode(input)) || process.exit());
} catch {
   void console.error(`invalid input ${input}`) || process.exit(1);
}

// if bottomify, bottomify and exit
opts.b && (output(Bottom.encode(input)) || process.exit());

// no option or invalid option, crash
void console.error(help) && process.exit(1);
