import React, { useEffect, useRef } from "https://npm.tfl.dev/react";
import jumper from "https://tfl.dev/@truffle/utils@~0.0.2/jumper/jumper.ts";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import Button from "https://tfl.dev/@truffle/ui@~0.1.0/components/button/button.tag.ts";

import Canvas from "../canvas/canvas.tsx";
import styleSheet from "./home.scss.js";

function ExtensionMapping() {
  useStyleSheet(styleSheet);

  useEffect(() => {
    const style = {
      width: "400px",
      height: "400px",
      background: "#fff",
      position: "fixed",
      bottom: 0,
      "z-index": "999",
    };
    // set styles for this iframe within YouTube's site
    jumper.call("layout.applyLayoutConfigSteps", {
      layoutConfigSteps: [
        { action: "useSubject" }, // start with our iframe
        { action: "setStyle", value: style },
      ],
    });
  }, []);

  return (
    <div className="c-home">
      <h1>Prompt: poop</h1>
      <Canvas />
      <div className="c-actions">
        <Button className="button button-clear" onClick={console.log}>Clear</Button>
        <Button className="button button-send" onClick={console.log}>Send</Button>
      </div>
    </div>
  );
}

export default ExtensionMapping;
