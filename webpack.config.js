const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  return {
    mode: isDev ? "development" : "production",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDev ? "bundle.js" : "bundle.[contenthash].js",
      publicPath: "/", // IMPORTANT for BrowserRouter
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      fallback: {
        fs: false,
        path: false,
        crypto: false,
        stream: false,
        util: false,
        os: false,
        zlib: false,
        buffer: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: { transpileOnly: true, configFile: "tsconfig.app.json" },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        cache: false,
      }),
      new CopyPlugin({
        patterns: [{ from: "public", to: "." }], // copies CNAME, logos, etc.
      }),
    ],
    devServer: {
      historyApiFallback: true, // allows BrowserRouter to work in dev mode
      static: path.join(__dirname, "dist"),
      port: 3000,
      open: true,
    },
  };
};
