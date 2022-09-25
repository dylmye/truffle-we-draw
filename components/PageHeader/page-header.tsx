import React from "https://npm.tfl.dev/react";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";

import styleSheet from "./page-header.scss.js";

interface HeaderProps {
  titleText?: string;
}

export default function Header({ titleText }: HeaderProps) {
  useStyleSheet(styleSheet);

  return (
    <header className="page-header">
      <h1 className="title">{titleText}</h1>
    </header>
  );
}
