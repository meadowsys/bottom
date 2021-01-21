# bottom

TypeScript implementation of the [Official Bottom specification](https://github.com/bottom-software-foundation/spec).

## installing

```sh
npm i bottom-text
# or
pnpm i bottom-text
# or
ponpon i bottom-text
```

## usage

```js
// commonjs require
const Bottom = require("bottom-text");
// esm/ts import
import Bottom from "bottom-text";

Bottom.encode("Hello World!");
// => 💖✨✨,,👉👈💖💖,👉👈💖💖🥺,,,👉👈💖💖🥺,,,👉👈💖💖✨,👉👈✨✨✨,,👉👈💖✨✨✨🥺,,👉👈💖💖✨,👉👈💖💖✨,,,,👉👈💖💖🥺,,,👉👈💖💖👉👈✨✨✨,,,👉👈

Bottom.decode("💖✨✨,,👉👈💖💖,👉👈💖💖🥺,,,👉👈💖💖🥺,,,👉👈💖💖✨,👉👈✨✨✨,,👉👈💖✨✨✨🥺,,👉👈💖💖✨,👉👈💖💖✨,,,,👉👈💖💖🥺,,,👉👈💖💖👉👈✨✨✨,,,👉👈");
// => Hello World!
```

## docs

- [latest](https://autumnblazey.github.io/bottom/latest/)
- [main](https://autumnblazey.github.io/bottom/master/)
