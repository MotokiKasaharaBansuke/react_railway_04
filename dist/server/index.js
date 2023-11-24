"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var react_1 = __importDefault(require("react"));
var server_1 = require("react-dom/server");
var App_1 = __importDefault(require("../src/App"));
var app = (0, express_1.default)();
var PORT = 9000;
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../..", "build")));
app.get("/*", function (req, res) {
    var reactApp = (0, server_1.renderToString)(react_1.default.createElement(App_1.default, null));
    var indexFile = path_1.default.resolve(__dirname, "../..", "build", "index.html");
    fs_1.default.readFile(indexFile, "utf8", function (err, data) {
        if (err) {
            console.error("Something went wrong:", err);
            return res.status(500).send("Internal Server Error");
        }
        return res.send(data.replace('<div id="root"></div>', "<div id=\"root\">".concat(reactApp, "</div>")));
    });
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
