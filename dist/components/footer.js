"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Footer() {
  var footerHeadingStyles = "font-semibold border-b-2 border-border xs:text-2xl lg:text-xl xs:mb-4 lg:mr-8 lg:mb-6 xs:pb-2 lg:pb-4";
  return /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-secondary--foreground flex xs:flex-col lg:flex-row pt-24 pb-24 lg:px-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "xs:w-full lg:w-1/2"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: "/logo.svg",
    width: "400",
    height: "162",
    alt: "Company logo"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "xs:w-full lg:w-1/2 pt-16 xs:pl-11 lg:pl-0 flex flex-wrap xs:flex-col lg:flex-row lg:justify-end"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col max-w-48 w-full xs:mb-8"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: footerHeadingStyles
  }, "Information"), /*#__PURE__*/_react["default"].createElement("ul", null, [['Link 1', '/#'], ['Link 2', '/#'], ['Link 3', '/#']].map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      text = _ref2[0],
      href = _ref2[1];
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: text
    }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: href
    }, text));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col max-w-48 w-full xs:mb-8"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: footerHeadingStyles
  }, "Services"), /*#__PURE__*/_react["default"].createElement("ul", null, [['Service 1'], ['Service 2'], ['Service 3']].map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
      text = _ref4[0];
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: text
    }, text);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col max-w-48 w-full xs:mb-8"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: footerHeadingStyles
  }, "Contact"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", {
    className: "lg:mb-2"
  }, "123 Fake Street, Fakesville, CA 99999"), /*#__PURE__*/_react["default"].createElement("li", {
    className: "lg:mb-2"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "tel:+15555555555"
  }, "(555) 555-5555")), /*#__PURE__*/_react["default"].createElement("li", {
    className: "lg:mb-2"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "mailto:email@me.com"
  }, "Fake Name <email@me.com>")))))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center pb-8 xs:px-12"
  }, "Designed and hand coded by ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    className: "text-primary font-semibold",
    href: "https://palmspringswebdesign.net"
  }, "Palm Springs Web Design"), " ", /*#__PURE__*/_react["default"].createElement("br", null), "Copyright 2024 - Present"));
}