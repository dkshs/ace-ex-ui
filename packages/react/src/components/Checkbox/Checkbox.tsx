// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, ReactNode } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { styled, darkTheme } from "../../styles";

import { Box } from "../Box";
import { Text } from "../Text";

import { Animations } from "../Animations";
import { Icon } from "../Icons";

const CheckboxContainer = styled(CheckboxPrimitive.Root, {
  outline: 0,
  bc: "$gray300",
  br: "$xs",
  cursor: "pointer",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid transparent",
  transition: "linear 200ms",

  [`.${darkTheme} &`]: {
    bc: "$gray800",
  },

  variants: {
    size: {
      sm: { size: "$4" },
      md: { size: "$6" },
      lg: { size: "$8" },
    },
  },

  '&[data-state="checked"]': {
    bc: "$blue500",
  },

  "&:not(:focus):hover": {
    borderColor: "$gray400",

    '&[data-state="checked"]': {
      borderColor: "$blue700",

      [`.${darkTheme} &`]: {
        borderColor: "$blue300",
      },
    },

    [`.${darkTheme} &`]: {
      borderColor: "$gray600",
    },
  },
  "&:focus": {
    borderColor: "$blue700",

    [`.${darkTheme} &`]: {
      borderColor: "$blue300",
    },
  },

  defaultVariants: {
    size: "md",
  },
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: "$white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  '&[data-state="checked"]': {
    animation: `${Animations.slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${Animations.slideOut} 200ms ease-out`,
  },
});

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  label?: ReactNode;
  labelSize?: "sm" | "md" | "lg";
}

export const Checkbox = ({
  label,
  size,
  labelSize,
  ...props
}: CheckboxProps) => {
  return (
    <Box
      as="label"
      css={{
        display: "flex",
        gap: "$1",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <CheckboxContainer size={size} {...props}>
        <CheckboxIndicator>
          <Icon
            iconName="Check"
            weight="bold"
            size={size === "sm" ? 8 : size === "md" ? 16 : 24}
          />
        </CheckboxIndicator>
      </CheckboxContainer>
      {!!label && <Text>{label}</Text>}
    </Box>
  );
};
