module.exports = {
   extends: [
      "@autumnblaze/h"
   ],
   plugins: [
      "@typescript-eslint",
      "functional"
   ],
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaVersion: 2017,
      sourceType: "module",
      ecmaFeatures: {
         globalReturn: false,
         impliedStrict: true,
         jsx: false
      },
      tsconfigRootDir: __dirname,
      project: "./tsconfig.eslint.json"
   }
}
