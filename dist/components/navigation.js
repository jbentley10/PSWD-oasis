"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navigation;
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _button = require("./ui/button");
var _lucideReact = require("lucide-react");
var _nextThemes = require("next-themes");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Navigation() {
  var _useTheme = (0, _nextThemes.useTheme)(),
    theme = _useTheme.theme,
    setTheme = _useTheme.setTheme;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "bg-background drop-shadow flex flex-row items-center justify-between xs:justify-end lg:py-8 md:py-10 sm:py-8 xs:py-6"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "md:w-1/4 sm:w-2/6 xs:w-1/4 lg:pl-16 md:pl-24 sm:pl-8 xs:pl-4",
    id: "logo"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: "/logo.svg",
    width: "800",
    height: "615",
    alt: "logo"
  })), /*#__PURE__*/_react["default"].createElement("section", {
    className: "md:w-3/4 sm:w-4/6 xs:w-3/4 flex flex-row xs:justify-end md:space-evenly lg:justify-end align-center items-center lg:pr-16 md:pr-24 sm:pr-2 xs:pr-4",
    id: "links-and-phone"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "xs:mr-2 sm:mr-11 lg:mr-28",
    id: "links"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    className: "hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs",
    href: "#link1"
  }, "Link 1"), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    className: "hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs",
    href: "#link2"
  }, "Link 2"), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    className: "hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs",
    href: "#link-3"
  }, "Link 3")), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    onClick: function onClick() {
      return theme === "light" ? setTheme("dark") : setTheme("light");
    },
    variant: "outline",
    size: "icon",
    className: "mr-6"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Sun, {
    className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  }), /*#__PURE__*/_react["default"].createElement(_lucideReact.Moon, {
    className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Toggle theme")), /*#__PURE__*/_react["default"].createElement(_button.Button, null, "Contact Us")));
}
;