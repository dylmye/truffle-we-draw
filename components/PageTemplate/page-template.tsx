import React from "https://npm.tfl.dev/react";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";

import styleSheet from "./page-template.scss.js";

interface PageTemplateProps {
    children: React.ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  useStyleSheet(styleSheet);

  return (
    <main className="wrapper">
      {children}
    </main>
  );
}
