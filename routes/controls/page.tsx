import React, { useState } from "https://npm.tfl.dev/react";
import { toDist } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";

import CallToActionButton from "../../components/CallToActionButton/call-to-action-button.tsx";
import NewPromptDialog from "../../components/NewPromptDialog/new-prompt-dialog.tsx";
import PageHeader from "../../components/PageHeader/page-header.tsx";
import PageTemplate from "../../components/PageTemplate/page-template.tsx";

function ControlsPage() {
  const [newPromptDialogVisible, setNewPromptDialogVisibility] = useState(false);

  console.log(newPromptDialogVisible);

  return (
    <PageTemplate>
      <PageHeader titleText="we draw control center" />
      <CallToActionButton onPress={() => setNewPromptDialogVisibility(true)}>
        Start A New Prompt!
      </CallToActionButton>
      <p>List of 3 most recent prompts, link to view all</p>
      <p>Getting started</p>
      <NewPromptDialog
        visible={newPromptDialogVisible}
        onDismiss={() => setNewPromptDialogVisibility(false)}
      />
    </PageTemplate>
  );
}

export default toDist(ControlsPage, import.meta.url);
