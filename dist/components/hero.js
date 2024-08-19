"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _button = require("./ui/button");
var _image = _interopRequireDefault(require("next/image"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uZWnofwD6qr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

var Hero = function Hero(_ref) {
  var heading = _ref.heading,
    subheading = _ref.subheading,
    buttonLink = _ref.buttonLink,
    buttonText = _ref.buttonText;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "h-dvh md:h-auto mt-0 sm:pt-10 md:pt-11 lg:pt-14 xl:pt-16 atf-container bg-primary relative w-full flex"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden md:inline w-0 md:w-1/2"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: "/hero-image.webp",
    width: 1201,
    height: 1321,
    alt: "A monotone red image of a man addressing a crowd",
    loading: "eager"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full md:w-1/2 relative z-10 text-left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-16 max-w-md"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "pb-7 text-white font-bold tracking-tight"
  }, heading), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-lg text-white"
  }, subheading)), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    size: "lg",
    className: "mr-6"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: buttonLink,
    prefetch: false
  }, buttonText))));
};
var _default = exports["default"] = Hero;