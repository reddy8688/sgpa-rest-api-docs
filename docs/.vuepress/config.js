const fs = require("fs");
const path = require("path");

module.exports = {
  base: "/results-rest-api-docs/",
  lang: "en-US",
  title: "Documentation",
  description: "Documentation for SGPA REST API",

  themeConfig: {
    navbar: [
      {
        text: "Introduction",
        link: "/",
      },
    ],
    repo: "https://github.com/hemanth-kotagiri/sgpa-rest-api",

    docsRepo: "https://github.com/hemanth-kotagiri/sgpa-rest-api-docs",
    docsBranch: "main",
    docsDir: "docs",
    sidebar: {
      "/": getSideBar("/", "Introduction"),
    },
  },
};

function getSideBar(folder, title, include_readme) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (file) =>
        file.toLocaleLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, file)).isFile() &&
        extension.includes(path.extname(file))
    );

  if (include_readme) {
    files.unshift("README.md");
  }

  return [{ text: title, children: files }];
}
