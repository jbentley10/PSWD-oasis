"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _links = require("./ui/links");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Footer() {
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: "footer component-container bg-primary text-primary-foreground"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col sm:flex-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pl-16 sm:pl-0 sm:w-1/2 pt-14 pb-10"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: "/logo.svg",
    width: "200",
    height: "195",
    alt: "The logo for PIRC"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:w-1/2 pt-14"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col sm:flex-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "links sm:border-r-2 border-white pl-16 sm:pl-0 sm:pr-4 md:pr-20"
  }, /*#__PURE__*/_react["default"].createElement(_links.Links, {
    orientation: "vertical",
    size: "large"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "information sm:pl-4 pl-16"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Privacy Policy"))))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center mt-12 pb-10"
  }, "Copyright 2024", " ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    className: "font-bold",
    href: "https://palmspringswebdesign.net",
    target: "_blank"
  }, "Palm Springs Web Design")));
}