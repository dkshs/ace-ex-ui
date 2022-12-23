// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, ElementType } from "react";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { darkTheme, styled } from "../../styles";

export const TextArea = styled("textarea", {
  outline: 0,
  p: "$3 $4",
  width: "100%",
  br: "$md",
  transitionProperty: "color, border, background-color, box-shadow",
  transitionDuration: "200ms",

  fontFamily: "$default",
  fontSize: "$md",
  fontWeight: "$medium",
  resize: "vertical",
  minHeight: 80,

  variants: {
    variant: {
      primary: {
        bc: `${transparentize(0.4, colors.blue100)}`,
        border: "2px solid $blue300",

        [`.${darkTheme} &`]: {
          bc: `${transparentize(0.9, colors.blue900)}`,
          border: "2px solid $blue900",
        },

        "&:not(:focus, :disabled):hover": {
          borderColor: "$blue500",

          [`.${darkTheme} &`]: {
            borderColor: "$blue600",
          },
        },

        "&:focus-within": {
          ring: "$colors$blue500",
          borderColor: "transparent",
        },
      },
      default: {
        bc: "$gray50",
        border: "2px solid $gray300",

        [`.${darkTheme} &`]: {
          bc: "$zinc900",
          border: "2px solid $gray700",
        },

        "&:not(:focus, :disabled):hover": {
          borderColor: "$gray400",

          [`.${darkTheme} &`]: {
            borderColor: "$gray500",
          },
        },

        "&:focus-within": {
          ring: "$colors$blue500",
          borderColor: "transparent",
        },
      },
      error: {
        bc: "$red100",
        border: "2px solid $red300",

        [`.${darkTheme} &`]: {
          bc: `${transparentize(0.9, colors.red800)}`,
          border: "2px solid $red700",
        },

        "&:not(:focus, :disabled):hover": {
          borderColor: "$red500",
        },

        "&:focus-within": {
          ring: "$colors$red500",
          borderColor: "transparent",

          [`.${darkTheme} &`]: {
            ring: "$colors$red700",
          },
        },
      },
    },
  },

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray700",

    [`.${darkTheme} &`]: {
      color: "$gray400",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType;
}

TextArea.displayName = "TextArea";
