// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, ElementType } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { darkTheme, styled } from "../../styles";

import { Animations } from "../Animations";
import { Icon } from "../Icons";

const AvatarRoot = styled(AvatarPrimitive.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  br: "$full",
  bc: `${transparentize(0.6, colors.blue400)}`,

  "&:not(:has(img, span))": {
    animation: `${Animations.pulse} 2s linear infinite`,
  },

  [`.${darkTheme} &`]: {
    bc: `${transparentize(0.8, colors.blue400)}`,
  },

  variants: {
    size: {
      sm: { size: "calc($8 + $1)" },
      md: { size: "$11" },
      lg: { size: "$12" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  position: "relative",
  size: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  size: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

interface AvatarFallbackProps extends ComponentProps<typeof AvatarFallback> {}

export interface AvatarProps
  extends Omit<ComponentProps<typeof AvatarImage>, "size"> {
  as?: ElementType;
  size?: ComponentProps<typeof AvatarRoot>["size"];
  avatarFallbackProps?: AvatarFallbackProps;
}

export function Avatar({ size, avatarFallbackProps, ...props }: AvatarProps) {
  return (
    <AvatarRoot size={size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600} {...avatarFallbackProps}>
        <Icon iconName="User" css={{ size: "100%" }} />
      </AvatarFallback>
    </AvatarRoot>
  );
}

Avatar.displayName = "Avatar";
