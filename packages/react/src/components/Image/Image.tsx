// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps } from "react";
import { styled } from "../../styles";

export const Image = styled("img", {});

export interface ImageProps extends ComponentProps<typeof Image> {}

Image.displayName = "Image";
