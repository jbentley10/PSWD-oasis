"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const hero_1 = __importDefault(require("../src/components/hero"));
// Modify the meta object to use the new Meta type
const meta = {
    title: 'Components/Hero',
    component: hero_1.default
};
exports.default = meta;
exports.Primary = {
    args: {
        heading: "Example Heading",
        subheading: "lorem ipsum solor dut amet. Codipiscing elit.",
        buttonLink: "/",
        buttonText: "Click me!"
    },
};
