import React from "https://npm.tfl.dev/react";
import {
  toDist,
  useStyleSheet,
} from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";

import styleSheet from "./page.css.js";

import Home from "../components/home/home.tsx";

function HomePage() {
  useStyleSheet(styleSheet);

  return <Home />;
}

export default toDist(HomePage, import.meta.url);
