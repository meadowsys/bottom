import { encode, decode } from "..";
import { strictEqual } from "assert";

[
   "Hello World!!",
   "hai",
   "abcdefghijklmnopqrstuvwxyz",
   "Thee QOuick Brown Fox jumps over lazy doggie",
   "werwer",
   "h",
   "hehe test test test lol",
   "!@&*$*()!@$(*&!@()$#@_%&(#&*(_@#)&(%@#&*()",
   "hmm what else do i test, is this enough tests? I think this is enough tests lol",
   "你好，我喜歡吃香蕉和藍莓。"
].forEach(val => strictEqual(decode(encode(val)), val, `${val} failed the test`));
console.log("yay");
