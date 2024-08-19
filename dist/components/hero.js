"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _button = require("./ui/button");
var _image = _interopRequireDefault(require("next/image"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
  return /*#__PURE__*/React.createElement("section", {
    className: "h-dvh md:h-auto mt-0 sm:pt-10 md:pt-11 lg:pt-14 xl:pt-16 atf-container bg-primary relative w-full flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden md:inline w-0 md:w-1/2"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: "/hero-image.webp",
    width: 1201,
    height: 1321,
    alt: "A monotone red image of a man addressing a crowd",
    loading: "eager"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full md:w-1/2 relative z-10 text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-16 max-w-md"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "pb-7 text-white font-bold tracking-tight"
  }, heading), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-white"
  }, subheading)), /*#__PURE__*/React.createElement(_button.Button, {
    size: "lg",
    className: "mr-6"
  }, /*#__PURE__*/React.createElement(_link["default"], {
    href: buttonLink,
    prefetch: false
  }, buttonText))));
};
var _default = exports["default"] = Hero;