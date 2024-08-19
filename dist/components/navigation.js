"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _links = require("@/src/components/ui/links");
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Navigation = function Navigation() {
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "atf-container sm:pt-10 md:pt-11 m-0 bg-nav drop-shadow flex flex-col md:flex-row items-center justify-between xs:justify-end"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "w-full md:w-1/2",
    id: "logo"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: "/logo.svg",
    width: "100",
    height: "95",
    alt: "logo"
  }))), /*#__PURE__*/_react["default"].createElement("section", {
    className: "w-full pt-4 pb-8 md:py-0 md:w-1/2 flex flex-row justify-start",
    id: "links-and-phone"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "",
    id: "links"
  }, /*#__PURE__*/_react["default"].createElement(_links.Links, {
    orientation: "horizontal",
    size: "small"
  }))));
};
var _default = exports["default"] = Navigation;