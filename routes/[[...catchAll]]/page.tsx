import React from "https://npm.tfl.dev/react";
import { toDist } from "https://tfl.dev/@truffle/distribute@^2.0.0/format/wc/react/index.ts";

function Page() {
  return (
    <>
      Not found!!
    </>
  );
}

export default toDist(Page, import.meta.url);
