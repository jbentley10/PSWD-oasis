"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const navigation_1 = __importDefault(require("../src/components/navigation"));
// Modify the meta object to use the new Meta type
const meta = {
    title: 'Components/Navigation',
    component: navigation_1.default
};
exports.default = meta;
exports.Primary = {
    args: {},
};
