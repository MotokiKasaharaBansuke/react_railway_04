"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var styled_components_1 = require("styled-components");
var react_1 = __importDefault(require("react"));
var server_1 = require("react-dom/server");
var App_1 = __importDefault(require("../src/App"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var PORT = 9000;
app.use(express_1.default.static(path_1.default.join(__dirname, "../build")));
app.get("*", function (req, res) {
    var sheet = new styled_components_1.ServerStyleSheet();
    try {
        var reactApp = (0, server_1.renderToString)(sheet.collectStyles(react_1.default.createElement(App_1.default, null)));
        var styleTags = sheet.getStyleTags();
        var resHtml = "<!DOCTYPE html>\n    <html>\n      <head>\n        ".concat(styleTags, "\n      </head>\n      <body>\n        <div id=\"root\">").concat(reactApp, "</div>\n      </body>\n    </html>");
        res.send(resHtml);
    }
    catch (_a) {
        return res.status(500).send("Internal Server Error");
    }
    finally {
        sheet.seal();
    }
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
