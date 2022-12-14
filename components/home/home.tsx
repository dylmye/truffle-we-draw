import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "https://npm.tfl.dev/react";
import jumper from "https://tfl.dev/@truffle/utils@~0.0.2/jumper/jumper.ts";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";
import CanvasDraw from "https://npm.tfl.dev/react-canvas-draw@1";
import Button from "https://tfl.dev/@truffle/ui@~0.1.0/components/button/button.tag.ts";

import styleSheet from "./home.scss.js";
import {
  getActiveFormIds,
  getPreviousResponse,
  useSubmitDrawing,
  useSyncActiveForm,
} from "../../data/hooks.tsx";
import { ActiveForm } from "../../data/types.ts";

function ExtensionMapping() {
  useStyleSheet(styleSheet);
  const canvasRef = useRef<CanvasDraw | null>(null);
  const [isVisible, setVisibility] = useState(false);
  const [activeForm, setActiveForm] = useState<ActiveForm>({});
  // useSyncActiveForm();
  const previousResponse = useMemo(() => getPreviousResponse(activeForm?.formId), [activeForm]);
  const containerStyle = useMemo<React.CSSProperties>(() => ({
    width: "400px",
    height: "400px",
    background: "#fff",
    position: "fixed",
    bottom: 0,
    "z-index": "999",
    "display": isVisible ? "block" : "none",
  }), [isVisible]);
  const submitDrawing = useSubmitDrawing(activeForm?.formId);

  const onClose = () => setVisibility(false);

  const onClear = useCallback(() => {
    canvasRef?.current?.clear();
  }, []);

  const onSubmit = useCallback(() => {
    if (!!activeForm?.formId && !!activeForm?.questionId) {
      // see https://github.com/embiem/react-canvas-draw/issues/143
      // @ts-ignore: Unreachable code error
      const dataUrl: string = canvasRef?.current?.getDataURL("png", false, "#ffffff");
      submitDrawing(activeForm?.questionId, dataUrl);
    }
  }, []);

  useEffect(() => {
    getActiveFormIds().then((res) => {
      setVisibility(!!res?.formId);
      setActiveForm(res);
    });
  }, []);

  console.log({ activeForm });

  useEffect(() => {
    // set styles for this iframe within YouTube's site
    // @ts-ignore truffle acknowledged types are broken for JumperInstance
    jumper.call("layout.applyLayoutConfigSteps", {
      layoutConfigSteps: [
        { action: "useSubject" }, // start with our iframe
        { action: "setStyle", value: containerStyle },
      ],
    });
  }, [containerStyle]);

  return (
    <div className="c-home">
      {isVisible && (
        <>
          <header>
            <h1 title={`Prompt: ${activeForm?.prompt ?? ""}`}>Prompt: {activeForm?.prompt}</h1>
            <Button className="button button-clear" onClick={onClose}>Close</Button>
          </header>
          <CanvasDraw
            canvasWidth={350}
            canvasHeight={200}
            brushRadius={5}
            hideGrid
            ref={canvasRef}
            lazyRadius={0}
            style={{ borderRadius: "4px" }}
          />
          <footer className="c-actions">
            <Button className="button button-clear" onClick={onClear}>Clear</Button>
            <Button className="button button-send" onClick={onSubmit}>Submit</Button>
          </footer>
        </>
      )}
    </div>
  );
}

export default ExtensionMapping;
