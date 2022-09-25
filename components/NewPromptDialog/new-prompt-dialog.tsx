import React from "https://npm.tfl.dev/react";
import Dialog from "https://tfl.dev/@truffle/ui@~0.1.0/components/dialog/dialog.tag.ts";
import Button from "https://tfl.dev/@truffle/ui@~0.1.0/components/button/button.tag.ts";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";

import styleSheet from "./new-prompt-dialog.scss.js";

export interface NewPromptDialogProps {
  /** Toggle the visibility of this dialog */
  visible: boolean;
  /** The action to perform when the dialog is dismissed by the user */
  onDismiss: () => void;
}

export default function NewPromptDialog({ visible, onDismiss }: NewPromptDialogProps) {
  useStyleSheet(styleSheet);

  return (
    <Dialog hidden={!visible}>
      <div>
        <header className="dialog-header">
          <h2>Let's make a new prompt!</h2>
          <Button onClick={onDismiss}>X</Button>
        </header>
      </div>
    </Dialog>
  );
}
