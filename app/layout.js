"use strict";
/**
 * @file layout.tsx
 */
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import styles
require("../src/globals.css");
// Import dependencies
const React = __importStar(require("react"));
// Import components and utils
const navigation_1 = __importDefault(require("@/src/components/navigation"));
const footer_1 = __importDefault(require("@/src/components/footer"));
const providers_1 = require("./providers");
function RootLayout({ children, }) {
    return (<html lang='en'>
      <body>
        <providers_1.Providers>
          <navigation_1.default />
          {children}
          <footer_1.default />
        </providers_1.Providers>
      </body>
    </html>);
}
exports.default = RootLayout;
