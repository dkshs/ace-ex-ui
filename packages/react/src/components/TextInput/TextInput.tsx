// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, ElementType, FC, ReactNode } from "react";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { darkTheme, styled } from "../../styles";

const TextInputContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1-5",
  br: "$md",
  width: "100%",
  pl: "$3",
  fontWeight: "$medium",
  transition: "linear 200ms",

  cursor: "text",

  variants: {
    variant: {
      primary: {
        bc: `${transparentize(0.4, colors.blue100)}`,
        border: "2px solid $blue300",

        [`.${darkTheme} &`]: {
          bc: `${transparentize(0.9, colors.blue900)}`,
          border: "2px solid $blue900",
        },

        "&:not(:focus-within, &:has(input:disabled)):hover": {
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

        "&:not(:focus-within, &:has(input:disabled)):hover": {
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

        "&:not(:focus-within, &:has(input:disabled)):hover": {
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
    size: {
      sm: {
        height: "$10",
      },
      md: {
        height: "$12",
      },
    },
  },

  "&:has(input:disabled)": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:not(:has(span)):has(input)": {
    pl: 0,
    "& input": {
      px: "$3",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

const TextInputIcon = styled("span", {
  display: "flex",
  alignItems: "center",
  color: "$gray700",
  height: "100%",
  mr: "$0-5",

  [`.${darkTheme} &`]: {
    color: "$gray400",
  },
});

const TextInputPrefix = styled("span", {
  display: "flex",
  alignItems: "center",
  fontSize: "$sm",
  color: "$gray800",
  px: "$1-5",
  ml: "-$3",
  height: "100%",
  bblr: "$sm",
  btlr: "$sm",

  [`.${darkTheme} &`]: {
    color: "$gray400",
  },

  variants: {
    variant: {
      primary: {
        bc: `${transparentize(0.4, colors.blue200)}`,

        [`.${darkTheme} &`]: {
          bc: `${transparentize(0.9, colors.blue800)}`,
        },
      },
      default: {
        bc: `${transparentize(0.2, colors.gray200)}`,

        [`.${darkTheme} &`]: {
          bc: `$loContrast`,
        },
      },
      error: {
        bc: "$red200",

        [`.${darkTheme} &`]: {
          bc: `${transparentize(0.8, colors.red800)}`,
        },
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

const TextInputInput = styled("input", {
  bg: "transparent",
  br: "$md",
  display: "flex",
  alignItems: "center",
  outline: 0,
  flex: 1,
  height: "100%",
  fontFamily: "$inter",
  fontSize: "$md",
  fontWeight: "$medium",

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray700",

    [`.${darkTheme} &`]: {
      color: "$gray400",
    },
  },
});

export interface TextInputIconProps
  extends ComponentProps<typeof TextInputIcon> {
  as?: ElementType;
}
export interface TextInputPrefixProps
  extends ComponentProps<typeof TextInputPrefix> {
  as?: ElementType;
}
export interface TextInputInputProps
  extends ComponentProps<typeof TextInputInput> {}

export interface TextInputRootProps
  extends ComponentProps<typeof TextInputContainer> {
  prefix?: string;
  icon?: ReactNode;
  as?: ElementType;
}

export interface TextInputCompleteProps extends TextInputInputProps {
  prefix?: string;
  icon?: ReactNode;
  as?: ElementType;
  variant?: ComponentProps<typeof TextInputContainer>["variant"];
  boxSize?: ComponentProps<typeof TextInputContainer>["size"];
  boxCss?: ComponentProps<typeof TextInputContainer>["css"];
}

const TextInputComplete: FC<TextInputCompleteProps> = ({
  prefix,
  icon,
  as,
  children,
  boxSize,
  boxCss,
  variant,
  ...props
}) => {
  return (
    <TextInputContainer
      aria-label={props["aria-label"]}
      as={as}
      size={boxSize}
      css={boxCss}
      variant={variant}
    >
      {!!prefix && (
        <TextInputPrefix variant={variant}>{prefix}</TextInputPrefix>
      )}
      {!!icon && <TextInputIcon>{icon}</TextInputIcon>}
      {children}
      <TextInputInput {...props} />
    </TextInputContainer>
  );
};

const TextInputRoot = ({
  prefix,
  icon,
  children,
  ...props
}: TextInputRootProps) => {
  return (
    <TextInputContainer {...props}>
      {!!prefix && (
        <TextInputPrefix variant={props.variant}>{prefix}</TextInputPrefix>
      )}
      {!!icon && <TextInputIcon>{icon}</TextInputIcon>}
      {children}
    </TextInputContainer>
  );
};

TextInputComplete.displayName = "TextInput.Complete";

TextInputRoot.displayName = "TextInput.Root";
TextInputInput.displayName = "TextInput.Input";
TextInputIcon.displayName = "TextInput.Icon";
TextInputPrefix.displayName = "TextInput.Prefix";

export const TextInput = {
  Complete: TextInputComplete,
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Prefix: TextInputPrefix,
};
