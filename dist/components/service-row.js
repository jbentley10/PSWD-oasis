"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ServiceRow;
var _fa = require("react-icons/fa6");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ServiceRow(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex flex-row justify-center max-w-full px-32"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rounded-full w-16 h-16 bg-background"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaHouseChimney, {
    className: "items-center"
  })), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "font-semibold text-lg pb-2"
  }, props.heading1), /*#__PURE__*/_react["default"].createElement("p", null, props.subheading1)), /*#__PURE__*/_react["default"].createElement("section", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rounded-full w-16 h-16 bg-background"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaHouseChimney, {
    className: "items-center"
  })), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "font-semibold text-lg pb-2"
  }, props.heading2), /*#__PURE__*/_react["default"].createElement("p", null, props.subheading2)), /*#__PURE__*/_react["default"].createElement("section", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rounded-full w-16 h-16 bg-background"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaHouseChimney, {
    className: "items-center"
  })), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "font-semibold text-lg pb-2"
  }, props.heading3), /*#__PURE__*/_react["default"].createElement("p", null, props.subheading3)));
}