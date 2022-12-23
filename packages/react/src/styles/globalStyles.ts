import { darkTheme, globalCss } from ".";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";

import { resetStyles } from "./resetStyles";

export const globalStyles = globalCss({
  ...resetStyles,

  "*::-webkit-scrollbar": {
    size: "$2",
  },
  "*::-webkit-scrollbar-track": {
    bc: "transparent",
  },
  "*::-webkit-scrollbar-thumb": {
    br: "$sm",
    bc: "$gray400",

    "&:hover": {
      bc: "$gray500",
    },

    [`.${darkTheme} &`]: {
      bc: "$gray500",

      "&:hover": {
        bc: "$gray600",
      },
    },
  },

  "body, html": {
    fontFamily: "$inter",
    bc: "$background",
    color: "$primary",
  },

  "::selection": {
    bc: "$blue200",
    color: "$blue800",

    [`.${darkTheme} &`]: {
      bc: `${transparentize(0.9, colors.blue300)}`,
      color: "$blue300",
    },
  },

  ":root": {
    "--toastify-toast-width": "400px !important",
  },

  ".toastify": {
    color: "$primary !important",
    bc: "$backgroundOpacity !important",
    backdropFilter: "blur(24px)",
    lineHeight: "$shorter",
    fontWeight: "$semiBold",
    fontFamily: "$default",
    m: "$2",

    "@sm": {
      width: "100% !important",
      my: "-$2",
      mx: "auto",
    },

    "& button": {
      color: "$primary",
    },
  },
});
