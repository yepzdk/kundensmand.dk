const HtmlMin = require("html-minifier");
const ErrorOverlay = require("eleventy-plugin-error-overlay");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setTemplateFormats(["md"]);
  eleventyConfig.addPlugin(ErrorOverlay);
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  return {
    dir: {
      input: "src",
      output: "public_html",
      includes: "_includes",
    },
    //pathPrefix: "/kundensmand.dk/",
  };
};
