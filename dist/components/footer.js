"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;
var React = _interopRequireWildcard(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _links = require("./ui/links");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer component-container bg-primary text-primary-foreground"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pl-16 sm:pl-0 sm:w-1/2 pt-14 pb-10"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: "/logo.svg",
    width: "200",
    height: "195",
    alt: "The logo for PIRC"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sm:w-1/2 pt-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "links sm:border-r-2 border-white pl-16 sm:pl-0 sm:pr-4 md:pr-20"
  }, /*#__PURE__*/React.createElement(_links.Links, {
    orientation: "vertical",
    size: "large"
  })), /*#__PURE__*/React.createElement("div", {
    className: "information sm:pl-4 pl-16"
  }, /*#__PURE__*/React.createElement("p", null, "Privacy Policy"))))), /*#__PURE__*/React.createElement("p", {
    className: "text-center mt-12 pb-10"
  }, "Copyright 2024", " ", /*#__PURE__*/React.createElement(_link["default"], {
    className: "font-bold",
    href: "https://palmspringswebdesign.net",
    target: "_blank"
  }, "Palm Springs Web Design")));
}