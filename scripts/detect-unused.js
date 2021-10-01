/* eslint-disable no-console */
const madge = require("madge");
const path = require("path");

function pruneTree(subtree, tree) {
  if (!subtree || subtree.length === 0) return;
  for (let child of subtree) {
    const nextSubtree = tree[child];
    if (tree[child]) {
      delete tree[child];
    }
    pruneTree(nextSubtree, tree);
  }
}

madge(path.join(__dirname, ".."), {
  baseDir: path.join(__dirname, ".."),
  excludeRegExp: [
    /^\.next[\\/]/, // Ignore built artifacts
    /^next\.config\.js/, // Ignore Next.js configuration
    /^babel\.config\.js/, // Ignore Babel configuration
    /^dotenv\.config\.js/, // Ignore dotenv configuration
    /^webpack\.config\.js/, // Ignore webpack configuration
    /^.eslintrc\.js/, // Ignore Eslint configuration
    /^scripts[\\/]/, // Ignore scripts (where this file lives)
  ],
}).then((res) => {
  const tree = res.obj();

  const entrypoints = Object.keys(tree).filter(
    (e) => e.startsWith("pages/") || e.startsWith("pages\\"),
  );
  pruneTree(entrypoints, tree);

  const unusedFiles = Object.keys(tree);
  if (unusedFiles.length) {
    console.log(
      `⚠️  Found ${unusedFiles.length} files that no one is depending on, please consider removing:`,
    );
    unusedFiles.forEach((file) => {
      console.log("\x1b[33m%s\x1b[0m", file);
    });
    process.exit(1);
  } else {
    console.log("🎉 No used files!");
    process.exit(0);
  }
});
