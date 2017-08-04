module.exports = {
  entry: ["babel-polyfill", "./src/index.tsx"],
  output: {
    filename: "./dist/bundle.js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    loaders: [
      // All .ts(x) files will be piped through ts-loader then babel
      {
        test: /\.tsx?$/,
        loader: "babel-loader!ts-loader"
      },
      // All .js(x) files will be piped through babel
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
