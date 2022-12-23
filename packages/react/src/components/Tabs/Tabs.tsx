// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, FC, ReactNode } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { darkTheme, styled } from "../../styles";

const StyledTabsRoot = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  variants: {
    size: {
      sm: { maxWidth: "28rem" /* 448px */ },
      md: { maxWidth: "32rem" /* 512px */ },
      lg: { maxWidth: "36rem" /* 576px */ },
      xl: { maxWidth: "42rem" /* 672px */ },
      full: { width: "100%" },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
const StyledTabsList = styled(TabsPrimitive.List, {
  display: "flex",
  gap: "$1",
  p: "$1",

  bc: `${transparentize(0.2, colors.blue600)}`,
  btrr: "$md",
  btlr: "$md",

  [`.${darkTheme} &`]: {
    bc: `${transparentize(0.5, colors.blue900)}`,
  },
});
const StyledTabsTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  transition: "linear 200ms",

  fontFamily: "$inter",
  fontWeight: "$medium",
  fontSize: "$sm",
  lineHeight: 1,

  br: "$md",
  width: "100%",
  height: "$10",

  "@sm": {
    height: "$11",
  },

  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  bc: "transparent",
  color: "$blue100",

  userSelect: "none",
  cursor: "pointer",

  "&:first-child": { btlr: "$md" },
  "&:last-child": { btrr: "$md" },
  "&:hover": {
    bc: `${transparentize(0.8, colors.white)}`,
    [`.${darkTheme} &`]: {
      bc: `${transparentize(0.9, colors.white)}`,
    },
  },
  '&[data-state="active"]': {
    color: "$blue500",
    bc: "$background",
    shadowMd: `${transparentize(0.4, colors.black)}`,

    [`.${darkTheme} &`]: {
      bc: "$black",
      shadowMd: `${transparentize(0.9, colors.blue300)}`,
    },
  },
  "&:focus": {
    position: "relative",
    ring2: `${transparentize(0.1, colors.black)}`,

    [`.${darkTheme} &`]: {
      ring: "$colors$blue500",
    },
  },
});
const StyledTabsContent = styled(TabsPrimitive.Content, {
  width: "100%",
  outline: "none",

  backgroundColor: "$background",
  bx: `2px solid ${transparentize(0.2, colors.blue600)}`,
  bb: `2px solid ${transparentize(0.2, colors.blue600)}`,
  bblr: "$md",
  bbrr: "$md",
  "&:focus-visible": {
    ring: `${transparentize(0.2, colors.black)}`,
    borderColor: "transparent",

    [`.${darkTheme} &`]: {
      borderColor: "transparent",
      ring: "$colors$blue500",
    },
  },

  [`.${darkTheme} &`]: {
    bx: `2px solid ${transparentize(0.5, colors.blue900)}`,
    bb: `2px solid ${transparentize(0.5, colors.blue900)}`,
  },
});

export interface TabsRootProps extends ComponentProps<typeof StyledTabsRoot> {}
export interface TabListProps extends ComponentProps<typeof StyledTabsList> {}
export interface TabTriggerProps
  extends ComponentProps<typeof StyledTabsTrigger> {}
export interface TabContentProps
  extends ComponentProps<typeof StyledTabsContent> {}

export interface TabProps {
  title: string;
  value: string;
  content: ReactNode;
  triggerCSS?: ComponentProps<typeof StyledTabsTrigger>["css"];
  contentCSS?: ComponentProps<typeof StyledTabsContent>["css"];
}
export interface TabsCompleteProps extends TabsRootProps {
  tabs: TabProps[];
  tabsListProps?: TabListProps;
}

const TabsComplete: FC<TabsCompleteProps> = ({
  tabs,
  tabsListProps,
  ...props
}) => {
  return (
    <StyledTabsRoot {...props}>
      <StyledTabsList {...tabsListProps}>
        {tabs &&
          tabs.map(({ title, value, triggerCSS }) => (
            <StyledTabsTrigger
              key={`tab-trigger-${value}`}
              css={triggerCSS}
              value={value}
            >
              {title}
            </StyledTabsTrigger>
          ))}
      </StyledTabsList>
      {tabs &&
        tabs.map(({ value, content, contentCSS }) => (
          <StyledTabsContent
            key={`tab-content-${value}`}
            css={contentCSS}
            value={value}
          >
            {content}
          </StyledTabsContent>
        ))}
    </StyledTabsRoot>
  );
};

StyledTabsRoot.displayName = "Tabs.Root";
StyledTabsList.displayName = "Tabs.List";
StyledTabsTrigger.displayName = "Tabs.Trigger";
StyledTabsContent.displayName = "Tabs.Content";
TabsComplete.displayName = "Tabs.Complete";

export const Tabs = {
  Root: StyledTabsRoot,
  List: StyledTabsList,
  Trigger: StyledTabsTrigger,
  Content: StyledTabsContent,
  Complete: TabsComplete,
};
