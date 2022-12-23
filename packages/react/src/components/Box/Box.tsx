// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, ElementType } from "react";
import { styled } from "../../styles";

export const Box = styled("div", {});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}

Box.displayName = "Box";
