"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hero;
var _link = _interopRequireDefault(require("next/link"));
var _button = require("./ui/button");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uZWnofwD6qr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

function Hero(props) {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "bg-background relative w-full flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative z-10 text-center space-y-4 px-4 md:px-6"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-4xl md:text-6xl font-bold tracking-tight"
  }, props.heading), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-lg md:text-xl max-w-4xl"
  }, props.subheading), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    className: "mr-6"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: props.buttonLink,
    prefetch: false
  }, props.buttonText)), /*#__PURE__*/_react["default"].createElement(_button.Button, null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: props.buttonLink,
    prefetch: false
  }, props.buttonText))));
}