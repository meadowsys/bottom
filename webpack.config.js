const path = require("path");
const { DefinePlugin, BannerPlugin } = require("webpack");

module.exports = (env, argv) => {
   const pkg = require("./package.json");
   const config = {
      mode: "production",
      entry: "./src/cli.ts",
      target: "node",
      module: {
         rules: [{
            test: /\.ts$/,
            use: [{
               loader: "ts-loader"
            }],
            exclude: /node_modules/
         }]
      },
      resolve: {
         extensions: [".ts", ".js"]
      },
      plugins: [
         new DefinePlugin({
            VERSION: JSON.stringify(pkg.version),
            NAME: JSON.stringify("Alexander Liu"),
            GITHUB_USER: JSON.stringify("autumnblazey"),
            LICENSE: JSON.stringify(pkg.license)
         }),
         new BannerPlugin({
            raw: true,
            banner: "#!/usr/bin/env node"
         })
      ],
      output: {
         filename: "cli.js",
         path: path.resolve(__dirname, "build")
      }
   };
   return config;
};
