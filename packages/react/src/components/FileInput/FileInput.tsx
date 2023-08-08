// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import {
  type ComponentProps,
  type ElementRef,
  type MouseEvent,
  type ReactNode,
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

const Input = styled("input", {
  size: "0.1px",
  opacity: 0,
  overflow: "hidden",
  position: "absolute",
  zIndex: -1,

  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },

  defaultVariants: {
    size: "md",
  },
});

const Label = styled("label", {
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
  gap: "$1-5",

  "&:not(&:has(input:disabled)):active": {
    transform: "scale(0.96)",
  },

  "&:has(input:disabled)": {
    cursor: "not-allowed",
    opacity: 0.7,

    [`.${darkTheme} &`]: {
      opacity: 0.5,
    },
  },

  "& span.ripple": {
    position: "absolute",
    br: "$full",
    transform: "scale(0)",
    animation: `${rippleAnimation} 700ms linear`,
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        bg: "$blue500",

        [`.${darkTheme} &`]: {
          bg: "$blue700",
        },

        "&:not(&:has(input:disabled)):hover": {
          bg: "$blue600",
        },

        "& span.ripple": {
          bc: `${transparentize(0.6, colors.blue300)}`,
        },

        "&:focus-within": {
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

        [`.${darkTheme} &`]: {
          borderColor: "$blue700",
        },

        "& span.ripple": {
          bc: `${transparentize(0.6, colors.blue300)}`,
        },

        "&:not(&:has(input:disabled)):hover, &:focus-within": {
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

        "&:not(&:has(input:disabled)):hover, &:focus-within": {
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
        "& span.ripple": {
          bc: `${transparentize(0.6, colors.red300)}`,
        },

        [`.${darkTheme} &`]: {
          bg: "$red700",
        },

        "&:not(&:has(input:disabled)):hover": {
          bg: "$red600",
        },

        "&:not(&:has(input:disabled)):focus-within": {
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

        "&:not(&:has(input:disabled)):hover, &:not(&:has(input:disabled)):focus-within":
          {
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

        "&:not(&:has(input:disabled)):hover": {
          bg: "$green600",
        },

        "&:not(&:has(input:disabled)):focus-within": {
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

        "&:not(&:has(input:disabled)):hover, &:not(&:has(input:disabled)):focus-within":
          {
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
      sm: { height: "calc($8 + $1)", width: "max-content" },
      md: { height: "$11", width: "max-content" },
      lg: { height: "$12", width: "max-content" },
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

interface LabelProps extends ComponentProps<typeof Label> {}

export interface FileInputProps extends ComponentProps<typeof Input> {
  variant?: LabelProps["variant"];
  size?: LabelProps["size"];
  fullWidth?: LabelProps["fullWidth"];
  rounded?: LabelProps["rounded"];
  inputContent?: ReactNode;
}

export const FileInput = forwardRef<ElementRef<typeof Input>, FileInputProps>(
  (
    { variant, size, value, inputContent, fullWidth, rounded, ...props },
    ref,
  ) => {
    const createRipple = (
      event: MouseEvent<HTMLLabelElement, globalThis.MouseEvent>,
    ) => {
      const label = event.currentTarget;
      if (label.children[0].getAttribute("disabled") == null) {
        const { height, width, top, left } = label.getBoundingClientRect();
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
        label.appendChild(span);

        span.addEventListener("animationend", () => {
          label.removeChild(span);
        });
      }
    };

    return (
      <Label
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        rounded={rounded}
        onMouseDown={createRipple}
      >
        {inputContent}
        <Input ref={ref} {...props} type="file" />
      </Label>
    );
  },
);

FileInput.displayName = "FileInput";
