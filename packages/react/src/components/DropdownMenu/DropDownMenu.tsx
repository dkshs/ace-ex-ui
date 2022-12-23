// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import {
  type ComponentProps,
  type ElementRef,
  type FC,
  type ReactNode,
  forwardRef,
} from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { darkTheme, styled } from "../../styles";

import { Avatar } from "../Avatar";
import { Animations } from "../Animations";
import { Icon } from "../Icons";

const contentStyles: Stitches.CSS = {
  minWidth: 220,
  bc: "$gray50",
  borderRadius: 6,
  p: "$1",
  boxShadow: `0px 10px 38px -10px ${transparentize(
    0.6,
    colors.gray900,
  )}, 0px 10px 20px -15px ${transparentize(0.6, colors.gray900)}`,
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: Animations.slideDownAndFade },
    '&[data-side="right"]': { animationName: Animations.slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: Animations.slideUpAndFade },
    '&[data-side="left"]': { animationName: Animations.slideRightAndFade },
  },
  zIndex: 2,

  [`.${darkTheme} &`]: {
    backdropFilter: "blur(32px)",
    bc: `${transparentize(0.4, colors.gray800)}`,
    boxShadow: `0px 10px 38px -10px ${transparentize(
      0.8,
      colors.blue300,
    )}, 0px 10px 20px -15px ${transparentize(0.8, colors.blue300)}`,
  },
};

const DropdownMenuContent = styled(
  DropdownMenuPrimitive.Content,
  contentStyles,
);
const DropdownMenuSubContent = styled(
  DropdownMenuPrimitive.SubContent,
  contentStyles,
);

const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: "$gray50",
  width: "$4",
  height: "$2",

  [`.${darkTheme} &`]: {
    fill: "$gray800",
  },
});

const itemStyles = {
  all: "unset",
  fontSize: "$md",
  lineHeight: 1,
  fontWeight: "$medium",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  pl: "$6",
  userSelect: "none",
  transition: "linear 100ms",

  variants: {
    isLink: {
      true: {
        color: "$blue700",
        cursor: "pointer !important",
        outline: "none !important",

        [`.${darkTheme} &`]: {
          color: "$blue300",
        },

        "&[data-highlighted]": {
          textUnderlineOffset: "2px",
          textDecoration: "underline",
        },
      },
      false: {
        color: "$primary",
        pr: "$4",
      },
    },
    size: {
      sm: { height: "$8" },
      md: { height: "$10" },
    },
  },

  "&[data-disabled]": {
    color: "$gray400",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    bc: `${transparentize(0.8, colors.blue500)}`,

    [`.${darkTheme} &`]: {
      bc: `${transparentize(0.8, colors.blue800)}`,
    },
  },

  defaultVariants: {
    size: "md",
    isLink: false,
  },
};

const StyledDropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemStyles);
const StyledDropdownMenuCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem,
  itemStyles,
);
const StyledDropdownMenuRadioItem = styled(
  DropdownMenuPrimitive.RadioItem,
  itemStyles,
);
const DropdownMenuSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    bc: `${transparentize(0.6, colors.blue500)}`,

    [`.${darkTheme} &`]: {
      bc: `${transparentize(0.6, colors.blue800)}`,
    },
  },
  ...itemStyles,
});

const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, {
  pl: "$6",
  fontSize: "$xs",
  lineHeight: "25px",
  fontWeight: "$medium",
  color: "$blue500",
});

const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: "$px",
  bc: "$blue300",
  m: "$1-5",

  [`.${darkTheme} &`]: {
    bc: "$blue500",
  },
});

const DropdownMenuItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: "$6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const RightSlot = styled("div", {
  ml: "auto",
  color: "$blue900",
  position: "absolute",
  right: "$4",
  "[data-disabled] &": {
    color: "$gray400 !important",
  },

  [`.${darkTheme} &`]: {
    color: "$blue300",
  },
});

const TriggerButton = styled(DropdownMenuPrimitive.Trigger, {
  all: "unset",
  position: "relative",
  fontFamily: "$default",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$primary",
  transition: "linear 200ms",
  bc: `${transparentize(0.8, colors.blue400)}`,

  userSelect: "none",
  cursor: "pointer",

  variants: {
    size: {
      sm: { size: "calc($8 + $1)" },
      md: { size: "$11" },
      lg: { size: "$12" },
    },
    rounded: {
      full: { br: "$full" },
      md: { br: "$md" },
    },
    isUserMenu: {
      true: {
        outline: `2px solid ${transparentize(0.4, colors.blue900)}`,
        outlineOffset: "1px",

        [`.${darkTheme} &`]: {
          outline: `2px solid ${transparentize(0.6, colors.blue500)}`,
        },

        "&:hover": {
          ring2: "$colors$blue500 !important",
        },
      },
      false: {
        "&:hover": {
          bc: `${transparentize(0.6, colors.blue600)}`,

          [`.${darkTheme} &`]: {
            bc: `${transparentize(0.9, colors.blue500)}`,
          },
        },
      },
    },
  },

  "&:focus": {
    ring2: "$colors$blue500 !important",
  },

  [`.${darkTheme} &`]: {
    bc: "$gray800",
  },

  defaultVariants: {
    rounded: "md",
    size: "md",
    isUserMenu: false,
  },
});

const StyledDropdownMenuRoot = styled(DropdownMenuPrimitive.Root, {});
const DropdownMenuPortal = styled(DropdownMenuPrimitive.Portal, {});
const StyledDropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
const StyledDropdownMenuSub = styled(DropdownMenuPrimitive.Sub, {});
const StyledDropdownMenuRadioGroup = styled(
  DropdownMenuPrimitive.RadioGroup,
  {},
);

interface MenuRootProps extends ComponentProps<typeof StyledDropdownMenuRoot> {}
interface MenuTriggerProps extends ComponentProps<typeof TriggerButton> {}
interface MenuPortalProps extends ComponentProps<typeof DropdownMenuPortal> {}
interface MenuContentProps extends ComponentProps<typeof DropdownMenuContent> {}

interface ItemIndicatorProps
  extends ComponentProps<typeof DropdownMenuItemIndicator> {}

export interface DropdownMenuLabelProps
  extends ComponentProps<typeof DropdownMenuLabel> {}
export interface DropdownMenuGroupProps
  extends ComponentProps<typeof StyledDropdownMenuGroup> {
  label?: string;
  labelProps?: DropdownMenuLabelProps;
}

const DropdownMenuGroup = forwardRef<
  ElementRef<typeof StyledDropdownMenuGroup>,
  DropdownMenuGroupProps
>(({ children, label, labelProps, ...props }, ref) => {
  return (
    <>
      <DropdownMenuLabel {...labelProps}>{label}</DropdownMenuLabel>
      <StyledDropdownMenuGroup ref={ref} {...props}>
        {children}
      </StyledDropdownMenuGroup>
    </>
  );
});

export interface RightSlotProps extends ComponentProps<typeof RightSlot> {}
export interface DropdownMenuItemProps
  extends ComponentProps<typeof StyledDropdownMenuItem> {}

const DropdownMenuItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuItem>,
  DropdownMenuItemProps
>(({ ...props }, ref) => {
  return <StyledDropdownMenuItem ref={ref} {...props} />;
});

interface DropdownMenuSubRootProps
  extends ComponentProps<typeof StyledDropdownMenuSub> {}
interface DropdownMenuSubTriggerProps
  extends ComponentProps<typeof DropdownMenuSubTrigger> {
  text: string;
}
interface DropdownMenuSubContentProps
  extends ComponentProps<typeof DropdownMenuSubContent> {}

export interface DropdownMenuSubProps {
  subRootProps?: DropdownMenuSubRootProps;
  subTriggerProps?: DropdownMenuSubTriggerProps;
  portalProps?: MenuPortalProps;
  subContentProps?: DropdownMenuSubContentProps;
  children?: ReactNode;
}

const DropdownMenuSub: FC<DropdownMenuSubProps> = ({
  subRootProps,
  subTriggerProps,
  portalProps,
  subContentProps,
  children,
}) => {
  return (
    <StyledDropdownMenuSub {...subRootProps}>
      <DropdownMenuSubTrigger {...subTriggerProps}>
        {subTriggerProps?.text}
        <RightSlot>
          <Icon iconName="ChevronRight" />
        </RightSlot>
      </DropdownMenuSubTrigger>

      <DropdownMenuPortal {...portalProps}>
        <DropdownMenuSubContent
          sideOffset={2}
          alignOffset={-5}
          {...subContentProps}
        >
          {children}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </StyledDropdownMenuSub>
  );
};

export interface DropdownMenuCheckboxItemProps
  extends ComponentProps<typeof StyledDropdownMenuCheckboxItem> {
  rightSlot?: RightSlotProps;
  indicatorProps?: ItemIndicatorProps;
  text: string;
}

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ rightSlot, text, indicatorProps, ...props }, ref) => {
  return (
    <StyledDropdownMenuCheckboxItem ref={ref} {...props}>
      <DropdownMenuItemIndicator {...indicatorProps}>
        <Icon iconName="Check" weight="bold" />
      </DropdownMenuItemIndicator>
      {text} {!!rightSlot?.children && <RightSlot {...rightSlot} />}
    </StyledDropdownMenuCheckboxItem>
  );
});

export interface DropdownMenuRadioGroupProps
  extends ComponentProps<typeof StyledDropdownMenuRadioGroup> {}
export interface DropdownMenuRadioItemProps
  extends ComponentProps<typeof StyledDropdownMenuRadioItem> {
  indicatorProps?: ItemIndicatorProps;
}

const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuRadioItem>,
  DropdownMenuRadioItemProps
>(({ children, indicatorProps, ...props }, ref) => {
  return (
    <StyledDropdownMenuRadioItem ref={ref} {...props}>
      <DropdownMenuItemIndicator {...indicatorProps}>
        <Icon iconName="Circle" weight="fill" size={12} />
      </DropdownMenuItemIndicator>
      {children}
    </StyledDropdownMenuRadioItem>
  );
});

interface UserInfoProps {
  username: string;
  userImg: string;
}

export interface DropdownMenuProps extends MenuRootProps {
  triggerOptions?: MenuTriggerProps;
  portalOptions?: MenuPortalProps;
  contentOptions?: MenuContentProps;
  iconMenu?: boolean;
  userInfo?: UserInfoProps;
  children?: ReactNode;
}

export const DropdownMenuRoot: FC<DropdownMenuProps> = ({
  iconMenu = true,
  userInfo,
  triggerOptions,
  portalOptions,
  contentOptions,
  children,
  ...props
}) => {
  return (
    <StyledDropdownMenuRoot {...props}>
      <TriggerButton {...triggerOptions}>
        {userInfo && triggerOptions?.isUserMenu ? (
          <Avatar
            alt={`Foto de perfil de ${userInfo.username}`}
            src={userInfo.userImg}
            size={
              triggerOptions?.size === "sm"
                ? "sm"
                : triggerOptions?.size === "md"
                ? "md"
                : "lg"
            }
          />
        ) : (
          iconMenu && (
            <Icon
              iconName="Menu"
              size={
                triggerOptions?.size === "sm"
                  ? 26
                  : triggerOptions?.size === "md"
                  ? 32
                  : 38
              }
            />
          )
        )}
      </TriggerButton>

      <DropdownMenuPortal {...portalOptions}>
        <DropdownMenuContent sideOffset={8} {...contentOptions}>
          {children}
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </StyledDropdownMenuRoot>
  );
};

DropdownMenuRoot.displayName = "DropdownMenu.Root";
DropdownMenuLabel.displayName = "DropdownMenu.Label";
DropdownMenuItem.displayName = "DropdownMenu.Item";
DropdownMenuSeparator.displayName = "DropdownMenu.Separator";

DropdownMenuGroup.displayName = "DropdownMenu.Group";
DropdownMenuCheckboxItem.displayName = "DropdownMenu.CheckboxItem";
StyledDropdownMenuRadioGroup.displayName = "DropdownMenu.RadioGroup";
DropdownMenuRadioItem.displayName = "DropdownMenu.RadioItem";

DropdownMenuSub.displayName = "DropdownMenu.SubContent";
RightSlot.displayName = "DropdownMenu.RightSlot";
DropdownMenuItemIndicator.displayName = "DropdownMenu.ItemIndicator";

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Item: DropdownMenuItem,
  SubContent: DropdownMenuSub,
  Separator: DropdownMenuSeparator,
  CheckboxItem: DropdownMenuCheckboxItem,
  Group: DropdownMenuGroup,
  Label: DropdownMenuLabel,
  RadioGroup: StyledDropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  RightSlot,
  ItemIndicator: DropdownMenuItemIndicator,
};
