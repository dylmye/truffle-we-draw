import React, { useCallback, useEffect, useRef, useState } from "https://npm.tfl.dev/react";
import { useStyleSheet } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";

import styleSheet from "./canvas.scss.js";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setDrawing] = useState<boolean>(false);
  const [{ startX, startY }, setCoords] = useState<
    { startX: number | null; startY: number | null }
  >({ startX: null, startY: null });
  const LINE_WIDTH = 2;
  useStyleSheet(styleSheet);

  const onCanvasMouseDown = useCallback((e: MouseEvent): void => {
    setDrawing(true);
    setCoords({ startX: e.clientX, startY: e.clientY });
  }, [canvasRef.current]);

  const onCanvasMouseUp = useCallback((_: MouseEvent): void => {
    const canvasCtx = canvasRef?.current?.getContext("2d");

    if (!canvasCtx) return;

    setDrawing(false);
    canvasCtx?.stroke();
    canvasCtx?.beginPath();
  }, [canvasRef.current]);

  const onCanvasMouseMove = useCallback((e: MouseEvent): void => {
    const canvasCtx = canvasRef?.current?.getContext("2d");

    if (!isDrawing || !canvasCtx || !canvasRef?.current) return;

    canvasCtx.lineWidth = LINE_WIDTH;
    canvasCtx.lineCap = "round";
    canvasCtx.lineTo(e.clientX - canvasRef.current.offsetLeft, e.clientY);
    canvasCtx.stroke();
  }, [isDrawing, canvasRef.current]);

  useEffect(() => {
    canvasRef?.current?.addEventListener("mousedown", onCanvasMouseDown);
    canvasRef?.current?.addEventListener("mouseup", onCanvasMouseUp);
    canvasRef?.current?.addEventListener("mousemove", onCanvasMouseMove);

    return () => {
      canvasRef?.current?.removeEventListener("mousedown", onCanvasMouseDown);
      canvasRef?.current?.removeEventListener("mouseup", onCanvasMouseUp);
      canvasRef?.current?.removeEventListener("mousemove", onCanvasMouseMove);
    };
  }, [canvasRef.current]);

  return (
    <div className="c-canvas">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
}
