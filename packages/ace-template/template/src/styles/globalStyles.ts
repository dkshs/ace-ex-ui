import { globalCss, resetStyles } from "@ace-ex/react";

export const globalStyles = globalCss({
  ...resetStyles,

  "body, html": {
    fontFamily: "$inter",
    bc: "$background",
    color: "$primary",
  },
});
