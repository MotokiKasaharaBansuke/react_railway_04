"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1rem;\n  font-size: 1rem;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #45a049;\n  }\n"], ["\n  padding: 1rem;\n  font-size: 1rem;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #45a049;\n  }\n"])));
exports.default = StyledButton;
var templateObject_1;
