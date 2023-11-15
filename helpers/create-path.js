const path = require("path");

const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

module.exports = createPath;
