// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, ElementType } from "react";
import { styled } from "../../styles";

export const Heading = styled("h2", {
  fontFamily: "$inter",
  lineHeight: "$shorter",
  m: 0,
  color: "$primary",

  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$3xl" },
      xl: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType;
}

Heading.displayName = "Heading";
