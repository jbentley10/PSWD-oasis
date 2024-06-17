"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Footer() {
  return /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-secondary--foreground flex flex-row pt-24 pb-24"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-1/2"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: "/logo.svg",
    width: "500",
    height: "315",
    alt: "Company logo"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-1/2 pt-16 flex flex-wrap flex-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col max-w-48 w-full"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-semibold mr-8 mb-6 border-b-2 border-border pb-4"
  }, "Information"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "Link 1"), /*#__PURE__*/_react["default"].createElement("li", null, "Link 2"), /*#__PURE__*/_react["default"].createElement("li", null, "Link 3"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col max-w-48 w-full"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-semibold mr-8 mb-6 border-b-2 border-border pb-4"
  }, "Services"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "Service 1"), /*#__PURE__*/_react["default"].createElement("li", null, "Service 2"), /*#__PURE__*/_react["default"].createElement("li", null, "Service 3"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col max-w-48 w-full"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-semibold mr-8 mb-6 border-b-2 border-border pb-4"
  }, "Contact"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, process.env.NEXT_PUBLIC_CLIENT_ADDRESS), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "tel:+15555555555"
  }, process.env.NEXT_PUBLIC_CLIENT_PHONE)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "mailto:email@me.com"
  }, process.env.NEXT_PUBLIC_CLIENT_EMAIL)))))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center pb-8"
  }, "Designed and hand coded by ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    className: "text-primary font-semibold",
    href: "https://palmspringswebdesign.net"
  }, "Palm Springs Web Design"), " Copyright 2024 - Present"));
}