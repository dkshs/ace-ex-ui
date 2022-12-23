// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import {
  type ComponentProps,
  type ElementRef,
  type ElementType,
  type MouseEvent,
  forwardRef,
} from "react";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { darkTheme, styled, keyframes } from "../../styles";

const rippleAnimation = keyframes({
  to: {
    transform: "scale(2)",
    opacity: 0,
  },
});

const StyledButton = styled("button", {
  outline: "none",
  bg: "transparent",
  transition: "linear 200ms",
  border: "2px solid transparent",
  overflow: "hidden",
  position: "relative",

  fontSize: "$sm",
  lineHeight: 0,
  fontWeight: "$medium",
  fontFamily: "$inter",
  textAlign: "center",
  px: "$2",

  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  svg: {
    transition: "50ms !important",
  },

  "&:not(:disabled):active": {
    transform: "scale(0.96)",
  },
  "& span.ripple": {
    position: "absolute",
    br: "$full",
    transform: "scale(0)",
    animation: `${rippleAnimation} 700ms linear`,
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.7,

    [`.${darkTheme} &`]: {
      opacity: 0.5,
    },
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        bg: "$blue500",

        [`.${darkTheme} &`]: {
          bg: "$blue700",
        },

        "& span.ripple": {
          bc: `${transparentize(0.6, colors.blue300)}`,
        },

        "&:not(:disabled):hover": {
          bg: "$blue600",
        },

        "&:focus-visible": {
          bg: "$blue600",
          ring: "$colors$blue800",

          [`.${darkTheme} &`]: {
            ring: "$colors$blue300",
          },
        },
      },
      secondary: {
        color: "$primary",
        border: "2px solid $blue500",

        "& span.ripple": {
          bc: `${transparentize(0.6, colors.blue300)}`,
        },

        [`.${darkTheme} &`]: {
          borderColor: "$blue700",
        },

        "&:not(:disabled):hover, &:focus-visible": {
          bg: "$blue500",
          color: "$white",

          "& *": {
            color: "$white",
          },

          [`.${darkTheme} &`]: {
            bg: "$blue700",
          },
        },
      },
      tertiary: {
        color: "$primary",
        bc: "$gray200",
        "& span.ripple": {
          bc: `${transparentize(0.6, colors.gray300)}`,
        },

        [`.${darkTheme} &`]: {
          bg: "$gray800",

          "& span.ripple": {
            bc: `${transparentize(0.4, colors.gray900)}`,
          },
        },

        "&:not(:disabled):hover, &:focus-visible": {
          color: "$background",
          bg: "$primary",

          "& *": {
            color: "$background",
          },
        },
      },
      danger: {
        color: "$white",
        bc: "$red500",

        [`.${darkTheme} &`]: {
          bg: "$red700",
        },

        "& span.ripple": {
          bc: `${transparentize(0.6, colors.red300)}`,
        },

        "&:not(:disabled):hover": {
          bg: "$red600",
        },

        "&:not(:disabled):focus-visible": {
          bg: "$red600",
          ring: "$colors$red800",

          [`.${darkTheme} &`]: {
            ring: "$colors$red300",
          },
        },
      },
      dangerOutlined: {
        color: "$primary",
        border: "2px solid $red500",

        "& span.ripple": {
          bc: `${transparentize(0.6, colors.red300)}`,
        },

        [`.${darkTheme} &`]: {
          borderColor: "$red700",
        },

        "&:not(:disabled):hover, &:not(:disabled):focus-visible": {
          bg: "$red500",
          color: "$white",

          "& *": {
            color: "$white",
          },

          [`.${darkTheme} &`]: {
            bg: "$red700",
          },
        },
      },
      confirm: {
        color: "$white",
        bc: "$green500",

        [`.${darkTheme} &`]: {
          bg: "$green700",
        },

        "& span.ripple": {
          bc: `${transparentize(0.6, colors.green300)}`,
        },

        "&:not(:disabled):hover": {
          bg: "$green600",
        },

        "&:not(:disabled):focus-visible": {
          bg: "$green600",
          ring: "$green800",

          [`.${darkTheme} &`]: {
            ring: "$green300",
          },
        },
      },
      confirmOutlined: {
        color: "$primary",
        border: "2px solid $green500",

        "& span.ripple": {
          bc: `${transparentize(0.6, colors.green300)}`,
        },

        [`.${darkTheme} &`]: {
          borderColor: "$green700",
        },

        "&:not(:disabled):hover, &:not(:disabled):focus-visible": {
          bg: "$green500",
          color: "$white",

          "& *": {
            color: "$white",
          },

          [`.${darkTheme} &`]: {
            bg: "$green700",
          },
        },
      },
    },

    size: {
      sm: { height: "calc($8 + $1)" },
      md: { height: "$11" },
      lg: { height: "$12" },
    },

    fullWidth: {
      true: { width: "100%" },
    },

    rounded: {
      none: { br: "$none" },
      xs: { br: "$xs" },
      sm: { br: "$sm" },
      md: { br: "$md" },
      lg: { br: "$lg" },
      full: { br: "$full" },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
    rounded: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  as?: ElementType;
  href?: string;
}

export const Button = forwardRef<ElementRef<typeof StyledButton>, ButtonProps>(
  ({ onMouseDown, ...props }, ref) => {
    const createRipple = (
      event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    ) => {
      const button = event.currentTarget;
      const { height, width, top, left } = button.getBoundingClientRect();
      const clientX = event.clientX;
      const clientY = event.clientY;

      const x = clientX - left;
      const y = clientY - top;

      const rippleSize = Math.max(height, width, 50);

      const positionTop = clientX
        ? y - rippleSize / 2
        : rippleSize / 2 - height / 2;
      const positionLeft = clientY
        ? x - rippleSize / 2
        : width / 2 - rippleSize / 2;

      const span = document.createElement("span");
      span.classList.add("ripple");
      span.style.cssText = `
        top: ${positionTop}px;
        left: ${positionLeft}px;
        pointer-events: none;
        width: ${rippleSize}px;
        height: ${rippleSize}px;
      `;
      button.appendChild(span);

      span.addEventListener("animationend", () => {
        button.removeChild(span);
      });

      if (onMouseDown) {
        onMouseDown(event);
      }
    };

    return <StyledButton ref={ref} {...props} onMouseDown={createRipple} />;
  },
);

Button.displayName = "Button";
