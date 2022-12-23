// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import {
  type ComponentProps,
  type ElementRef,
  type FC,
  forwardRef,
} from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { styled, darkTheme } from "../../styles";

import { Animations } from "../Animations";
import { Icons } from "../Icons";

const SelectRoot = styled(SelectPrimitive.Root, {});

const StyledSelectTrigger = styled(SelectPrimitive.Trigger, {
  outline: 0,
  lineHeight: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  br: "$sm",
  fontSize: "$sm",
  fontWeight: "$semiBold",
  gap: "$2",
  bc: "$gray100",
  color: "$primary",
  transition: "linear 200ms",
  border: "2px solid $gray300",

  "& svg": {
    transition: "linear 200ms",
  },

  cursor: "pointer",

  variants: {
    size: {
      sm: {
        height: "$8",
        px: "$4",
      },
      md: {
        height: "$10",
        px: "$5",
      },
      lg: {
        height: "$12",
        px: "$6",
      },
    },
  },

  [`.${darkTheme} &`]: {
    bc: "$gray800",
    border: "2px solid $gray700",
  },

  "&:not(:disabled):hover": {
    bc: "$gray300",

    "& svg": {
      transform: "translateY(0.1rem)",
    },

    [`.${darkTheme} &`]: {
      bc: "$gray700",
    },
  },
  "&:focus": {
    ring: "$colors$blue500",
    borderColor: "transparent",
  },

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  defaultVariants: {
    size: "md",
  },
});
const SelectValue = styled(SelectPrimitive.Value, {});

const StyledSelectContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  bc: "$gray100",
  br: "$md",
  boxShadow: `0px 10px 38px -10px ${transparentize(
    0.4,
    colors.gray900,
  )}, 0px 10px 20px -15px ${transparentize(0.4, colors.gray900)}`,
  transitionProperty: "border-color, background-color, opacity",
  transition: "linear 200ms",
  zIndex: 2,
  border: `2px solid ${transparentize(0.6, colors.blue600)}`,

  '&[data-state="open"]': {
    animation: `${Animations.fadeIn} 200ms linear`,
  },
  '&[data-state="close"]': {
    animation: `${Animations.fadeOut} 200ms linear`,
  },

  [`.${darkTheme} &`]: {
    border: `2px solid ${transparentize(0.9, colors.blue100)}`,
    bc: "$gray800",

    boxShadow: `0px 10px 38px -10px ${transparentize(
      0.9,
      colors.blue100,
    )}, 0px 10px 20px -15px ${transparentize(0.9, colors.blue100)}`,
  },
});

const SelectIcon = styled(SelectPrimitive.Icon, {
  color: "$primary",
  mt: "$0-5",
  transition: "linear 200ms",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "$6",
  color: "$blue600",
  cursor: "default",
  "*": { transition: "linear 200ms" },

  [`.${darkTheme} &`]: {
    color: "$blue500",
  },
};

const SelectScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles,
);
const SelectScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles,
);

const SelectViewPort = styled(SelectPrimitive.Viewport, {
  p: "$2",
});
const SelectGroup = styled(SelectPrimitive.SelectGroup, {});
const SelectLabel = styled(SelectPrimitive.SelectLabel, {
  px: "$8",
  fontSize: "$sm",
  fontWeight: "$semiBold",
  lineHeight: "$base",
  color: "$blue800",

  [`.${darkTheme} &`]: {
    color: "$blue500",
  },
});
const StyledSelectItem = styled(SelectPrimitive.Item, {
  display: "flex",
  alignItems: "center",
  fontSize: "$md",
  px: "$8",

  lineHeight: 1,
  color: "$primary",
  br: "$sm",
  height: "$5",
  gap: "$2",
  position: "relative",
  userSelect: "none",
  fontWeight: "$semiBold",

  variants: {
    size: {
      sm: { height: "$8" },
      md: { height: "$10" },
    },
  },

  "&[data-disabled]": {
    opacity: 0.5,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    outline: "none",
    bc: `${transparentize(0.7, colors.blue500)} !important`,

    [`.${darkTheme} &`]: {
      bc: "$gray900 !important",
    },
  },

  '&[data-state="checked"]': {
    fontWeight: "$bold",
    bc: `${transparentize(0.8, colors.blue300)}`,

    [`.${darkTheme} &`]: {
      bc: `${transparentize(0.5, colors.gray900)}`,
    },
  },

  defaultVariants: {
    size: "md",
  },
});
const SelectItemText = styled(SelectPrimitive.ItemText, {});
const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  color: "$green600",
  position: "absolute",
  left: 0,
  width: "$6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});
const SelectSeparator = styled(SelectPrimitive.Separator, {
  height: "$px",
  bc: "$gray600",
  m: "5px",
});

export interface SelectRootProps extends ComponentProps<typeof SelectRoot> {}

export interface SelectTriggerProps
  extends ComponentProps<typeof StyledSelectTrigger> {}
export interface SelectValueProps extends ComponentProps<typeof SelectValue> {}

export interface SelectContentProps
  extends ComponentProps<typeof StyledSelectContent> {}

export interface SelectGroupProps extends ComponentProps<typeof SelectGroup> {}
export interface SelectLabelProps extends ComponentProps<typeof SelectLabel> {}

export interface SelectItemProps
  extends ComponentProps<typeof StyledSelectItem> {}

const SelectTrigger = ({ children, ...props }: SelectTriggerProps) => {
  return (
    <StyledSelectTrigger {...props}>
      {children}
      <SelectIcon>
        <Icons.ChevronDown />
      </SelectIcon>
    </StyledSelectTrigger>
  );
};

const SelectItem = forwardRef<
  ElementRef<typeof StyledSelectItem>,
  SelectItemProps
>(({ children, ...props }, ref) => {
  return (
    <StyledSelectItem {...props} ref={ref}>
      <SelectItemText>{children}</SelectItemText>
      <SelectItemIndicator>
        <Icons.Check />
      </SelectItemIndicator>
    </StyledSelectItem>
  );
});

const SelectContent = ({ children, ...props }: SelectContentProps) => {
  return (
    <StyledSelectContent {...props}>
      <SelectScrollUpButton>
        <Icons.ChevronUp />
      </SelectScrollUpButton>
      <SelectViewPort>{children}</SelectViewPort>
      <SelectScrollDownButton>
        <Icons.ChevronDown />
      </SelectScrollDownButton>
    </StyledSelectContent>
  );
};

export interface SelectOptionProps {
  label: string;
  value: string;
}
export interface SelectCompleteProps extends SelectRootProps {
  options: SelectOptionProps[];
  triggerSize?: SelectTriggerProps["size"];
  itemSize?: SelectItemProps["size"];
  placeholder?: string;
  ariaLabel?: string;
  groupLabel?: string;
}

const SelectComplete: FC<SelectCompleteProps> = ({
  options,
  itemSize,
  triggerSize,
  placeholder,
  groupLabel,
  ariaLabel,
  ...props
}) => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger aria-label={ariaLabel || placeholder} size={triggerSize}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{groupLabel}</SelectLabel>
          {options.map(({ label, value }, i) => (
            <SelectItem size={itemSize} key={i} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  );
};

SelectComplete.displayName = "Select.Complete";

SelectRoot.displayName = "Select.Root";

SelectTrigger.displayName = "Select.Trigger";
SelectValue.displayName = "Select.Value";

SelectContent.displayName = "Select.Content";
SelectGroup.displayName = "Select.Group";
SelectLabel.displayName = "Select.Label";
SelectItem.displayName = "Select.Item";

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Content: SelectContent,
  Group: SelectGroup,
  Separator: SelectSeparator,
  Label: SelectLabel,
  Item: SelectItem,
  Complete: SelectComplete,
};
