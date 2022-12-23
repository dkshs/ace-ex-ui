// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, ElementType } from "react";
import { styled } from "../../styles";

export const Text = styled("p", {
  fontFamily: "$inter",
  lineHeight: "$base",
  m: 0,
  color: "$primary",
  fontWeight: "$medium",

  variants: {
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
  },
});

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType;
}

Text.displayName = "Text";
