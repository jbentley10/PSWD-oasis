"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navigation;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _image = _interopRequireDefault(require("next/image"));
var _nextJs = require("@chakra-ui/next-js");
var _lucideReact = require("lucide-react");
var _nextThemes = require("next-themes");
var _button = require("./ui/button");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var NavContent = function NavContent() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "flex sm:flex-col lg:flex-row sm:h-full lg:space-evenly lg:justify-end sm:items-left lg:items-center",
    id: "links"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex sm:flex-col sm:space-between lg:flex-row lg:mr-8",
    id: "links"
  }, [['Link 1', '/#'], ['Link 2', '/#'], ['Link 3', '/#']].map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      text = _ref2[0],
      href = _ref2[1];
    return /*#__PURE__*/_react["default"].createElement(_nextJs.Link, {
      key: text,
      className: "hover:opacity-50 sm:mb-2 sm:mb-4 md:mr-6 font-semibold sm:text-2xl lg:text-xl",
      href: href
    }, text);
  })), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    size: "lg"
  }, "Contact Us")));
};
function Navigation() {
  var _useTheme = (0, _nextThemes.useTheme)(),
    theme = _useTheme.theme,
    setTheme = _useTheme.setTheme;
  var _useDisclosure = (0, _react2.useDisclosure)(),
    isOpen = _useDisclosure.isOpen,
    onOpen = _useDisclosure.onOpen,
    onClose = _useDisclosure.onClose;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row items-center justify-start lg:px-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-1/2"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "sm:pl-4 md:pl-0",
    id: "logo"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: "/logo.svg",
    width: "400",
    height: "162",
    alt: "logo"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:w-1/2 sm:flex sm:flex-row sm:items-center sm:justify-end lg:hidden"
  }, /*#__PURE__*/_react["default"].createElement(_button.Button, {
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
  }, "Toggle theme")), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    onClick: onOpen,
    variant: "outline",
    size: "icon",
    className: "mr-6"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Menu, null)), /*#__PURE__*/_react["default"].createElement(_react2.Drawer, {
    placement: "left",
    onClose: onClose,
    isOpen: isOpen
  }, /*#__PURE__*/_react["default"].createElement(_react2.DrawerOverlay, null), /*#__PURE__*/_react["default"].createElement(_react2.DrawerContent, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col w-full"
  }, /*#__PURE__*/_react["default"].createElement(_react2.DrawerHeader, {
    borderBottomWidth: "1px"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: "/logo.svg",
    width: "800",
    height: "615",
    alt: "logo"
  }), /*#__PURE__*/_react["default"].createElement(_button.Button, {
    onClick: onClose,
    variant: "outline",
    size: "icon",
    className: "mr-6"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.X, null)))), /*#__PURE__*/_react["default"].createElement(_react2.DrawerBody, null, /*#__PURE__*/_react["default"].createElement(NavContent, null)))))), /*#__PURE__*/_react["default"].createElement("nav", {
    className: "drop-shadow sm:hidden lg:w-1/2 lg:flex lg:flex-row items-center sm:justify-between lg:justify-end lg:py-8"
  }, /*#__PURE__*/_react["default"].createElement(NavContent, null))));
}
;