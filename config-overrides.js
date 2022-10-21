const {
  override,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // add an alias for "page" imports
  addWebpackAlias({
    "utils": path.resolve(__dirname, "src/utils"),
    "components": path.resolve(__dirname, "src/components")
  }),
);