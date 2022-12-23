// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps } from "react";

import { styled } from "../../styles";
import { Text } from "../Text";

import { Animations } from "../Animations";
import { Icons } from "../Icons";

const StyledSpinner = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
  color: "$primary",

  "& svg": {
    animation: `${Animations.spin} 1s linear infinite`,
  },

  variants: {
    size: {
      sm: { "& svg": { size: "$3-5" } },
      md: { "& svg": { size: "$5" } },
      lg: { "& svg": { size: "$6" } },
    },
  },

  defaultVariants: { size: "md" },
});

export interface SpinnerProps extends ComponentProps<typeof StyledSpinner> {
  text?: string;
  textFirst?: boolean;
}

export const Spinner = ({ textFirst, text, size, ...props }: SpinnerProps) => {
  return (
    <StyledSpinner
      aria-label="O conteúdo está carregando..."
      aria-live="polite"
      role="status"
      size={size}
      {...props}
    >
      {!!text && textFirst && <Text size={size}>{text}</Text>}
      <Icons.Spinner />
      {!!text && !textFirst && <Text size={size}>{text}</Text>}
    </StyledSpinner>
  );
};
