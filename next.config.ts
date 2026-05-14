const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/andre6293.github.io" : "",
  assetPrefix: isProd ? "/andre6293.github.io/" : "",
};
