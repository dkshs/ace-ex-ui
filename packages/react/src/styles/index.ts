// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fontSizes,
  space,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  media,
  shadows,
} from "@ace-ex/tokens";
import { utils } from "./utils";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
  },
  theme: {
    colors: {
      ...colors,

      // Alias
      hiContrast: "rgba(11,13,14,1)",
      loContrast: "rgba(241,243,244,1)",

      primary: "$gray900",
      secondary: "$gray700",
      tertiary: "$gray500",
      background: "$gray50",
      backgroundOpacity: "rgba(215,217,219,0.1)",
      border: "$gray600",
    },
    space,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    // letterSpacings: {},
    // sizes: {},
    // borderWidths: {},
    // borderStyles: {},
    radii,
    shadows: {
      ...shadows,

      headerShadow: "0 10px 30px -6px rgb(0 0 0 / 0.2)",
    },
    // zIndices: {},
    // transitions: {},
  },

  media,

  utils,
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    hiContrast: "rgba(241,243,244,1)",
    loContrast: "rgba(11,13,14,1)",

    primary: "$gray100",
    secondary: "$gray200",
    tertiary: "$gray300",
    background: "$gray900",
    backgroundOpacity: "rgba(34,34,37,0.5)",
    border: "$gray100",
  },
});
