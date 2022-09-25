import React from "https://npm.tfl.dev/react";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import Button from "https://tfl.dev/@truffle/ui@~0.1.0/components/button/button.tag.ts";

import styleSheet from "./call-to-action-button.scss.js";

interface AddPromptButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export default function CallToActionButton({ children, onPress }: AddPromptButtonProps) {
  useStyleSheet(styleSheet);

  return <Button className="call-to-action-button" onClick={onPress}>{children}</Button>;
}
