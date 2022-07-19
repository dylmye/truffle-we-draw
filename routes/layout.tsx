import React from "https://npm.tfl.dev/react";
import {
  toDist,
  useStyleSheet,
} from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";

import styleSheet from "./layout.css.js";

function Layout({ children }: { children: React.ReactNode }) {
  // initial theme styles
  useStyleSheet(styleSheet);
  return children;
}

export default toDist(Layout, import.meta.url);
