// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps } from "react";
import { styled, darkTheme } from "../../styles";

export const Link = styled("a", {
  fontFamily: "$inter",
  lineHeight: "$base",
  m: 0,
  color: "$primary",
  fontWeight: "$medium",

  flexShrink: 0,
  outline: "none",
  textDecorationLine: "none",
  textUnderlineOffset: "2px",
  textDecorationColor: "$gray300",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  br: "$sm",
  transition: "linear 200ms",

  "&:hover": {
    textDecorationLine: "underline",
  },
  "&:focus": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    textDecorationLine: "none",
  },
  "&::selection": {
    textDecorationLine: "underline",
  },

  variants: {
    variant: {
      blue: {
        color: "$blue600",
        textDecorationColor: "$blue500",

        "&:focus": {
          outlineColor: "$blue500",
        },
      },
      subtle: {
        color: "$gray500",
        textDecorationColor: "$gray300",

        [`.${darkTheme} &`]: {
          color: "$gray400",
          textDecorationColor: "$gray600",
        },

        "&:focus": {
          outlineColor: "$gray400",

          [`.${darkTheme} &`]: {
            outlineColor: "$gray700",
          },
        },
      },
      contrast: {
        color: "$primary",
        textDecoration: "underline",
        textDecorationColor: "$gray400",
        "&:hover": {
          textDecorationColor: "$gray700",
          [`.${darkTheme} &`]: {
            textDecorationColor: "$gray600",
          },
        },
        "&:focus": {
          outlineColor: "$gray700",

          [`.${darkTheme} &`]: {
            outlineColor: "$gray400",
          },
        },
      },
      blueShadow: {
        br: "$none",
        textDecoration: "none",
        color: "$blue600",
        boxShadow: "$blue500 0 -1px 0 0 inset",
        transition: "0.2s ease-in-out",

        [`.${darkTheme} &`]: {
          boxShadow: "$blue700 0 -1px 0 0 inset",
        },

        "&:not(:focus):hover": {
          textDecoration: "none",
          color: "$white",
          boxShadow: "$blue500 0 -30px 0 -1px inset",

          [`.${darkTheme} &`]: {
            boxShadow: "$blue700 0 -30px 0 -1px inset",
          },
        },
        "&:focus": {
          br: "$sm",
          textDecoration: "none",
          outline: "none",
          color: "$white",
          boxShadow: "$blue500 0 -30px 0 -1px inset",

          [`.${darkTheme} &`]: {
            boxShadow: "$blue700 0 -30px 0 -1px inset",
          },
        },
      },
      subtleShadow: {
        br: "$none",
        textDecoration: "none",
        transition: "0.2s ease-in-out",
        color: "$gray600",
        boxShadow: "$gray300 0 -1px 0 0 inset",

        [`.${darkTheme} &`]: {
          color: "$gray400",
          boxShadow: "$gray400 0 -1px 0 0 inset",
        },

        "&:not(:focus):hover": {
          textDecoration: "none",
          color: "$primary",
          boxShadow: "$gray300 0 -30px 0 -1px inset",

          [`.${darkTheme} &`]: {
            boxShadow: "$gray700 0 -30px 0 -1px inset",
          },
        },
        "&:focus": {
          br: "$sm",
          textDecoration: "none",
          outline: "none",
          color: "$primary",
          boxShadow: "$gray300 0 -30px 0 -1px inset",

          [`.${darkTheme} &`]: {
            boxShadow: "$gray700 0 -30px 0 -1px inset",
          },
        },
      },
      contrastShadow: {
        br: "$none",
        textDecoration: "none",
        transition: "0.2s ease-in-out",
        color: "$primary",
        boxShadow: "$gray400 0 -1px 0 0 inset",

        "&:not(:focus):hover": {
          textDecoration: "none",
          color: "$loContrast",
          boxShadow: "$hiContrast 0 -30px 0 -1px inset",

          [`.${darkTheme} &`]: {
            boxShadow: "$gray300 0 -30px 0 -1px inset",
          },
        },
        "&:focus": {
          br: "$sm",
          textDecoration: "none",
          outline: "none",
          color: "$loContrast",
          boxShadow: "$hiContrast 0 -30px 0 -1px inset",

          [`.${darkTheme} &`]: {
            boxShadow: "$gray300 0 -30px 0 -1px inset",
          },
        },
      },
    },
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "blue",
  },
});

export interface LinkProps extends ComponentProps<typeof Link> {}

Link.displayName = "Link";
