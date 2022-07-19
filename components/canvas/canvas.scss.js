import scss from "https://tfl.dev/@truffle/utils@~0.0.3/css/css.ts";

export default scss`
.c-canvas {
  background-color: rgba(255,255,255,1);
  border-radius: 0.25rem;
  & > canvas {
    width: 100%;
    object-fit: contain;
  }
}`;