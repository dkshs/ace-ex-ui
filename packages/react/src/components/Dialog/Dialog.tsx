// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { useTransition, animated, config } from "react-spring";
import { darkTheme, styled } from "../../styles";

import { Button } from "../Button";

import { Icons } from "../Icons";

const DialogOverlay = styled(DialogPrimitive.Overlay, {
  backdropFilter: "blur(8px)",
  position: "fixed",
  inset: 0,
  zIndex: 99,
});

const DialogContent = styled(DialogPrimitive.Content, {
  bc: "$loContrast",
  br: "$md",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxHeight: "100vh",
  overflowY: "auto",
  p: "$6",
  py: "$8",
  zIndex: 100,
  boxShadow: `0 10px 15px -3px ${transparentize(
    0.6,
    colors.black,
  )}, 0 4px 6px -4px ${transparentize(0.6, colors.black)}`,
  transition: "linear 200ms",

  border: "2px solid $gray300",

  variants: {
    size: {
      sm: { maxWidth: "28rem" /* 448px */ },
      md: { maxWidth: "32rem" /* 512px */ },
      lg: { maxWidth: "36rem" /* 576px */ },
      xl: { maxWidth: "42rem" /* 672px */ },
    },
  },

  "&:focus": { outline: "none" },

  [`.${darkTheme} &`]: {
    bc: `${transparentize(0.6, colors.gray800)}`,
    backdropFilter: "blur(32px)",
    border: "2px solid $gray700",
  },

  defaultVariants: {
    size: "md",
  },
});

const DialogTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: "$medium",
  color: "$primary",
  fontSize: "$xl",
});

const DialogDescription = styled(DialogPrimitive.Description, {
  mt: "$2-5",
  mb: "$4",
  color: "$gray500",
  fontWeight: "$medium",
  fontSize: "$md",

  [`.${darkTheme} &`]: {
    color: "$gray400",
  },
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "$default",
  br: "$md",
  size: "$10",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$primary",
  position: "absolute",
  top: 10,
  right: 10,
  transition: "linear 200ms",

  cursor: "pointer",

  "&:hover": { backgroundColor: "$gray200" },
  "&:focus": { ring: "$colors$blue600" },

  [`.${darkTheme} &`]: {
    "&:hover": { backgroundColor: "$gray900" },
  },
});

const DialogClose = styled(DialogPrimitive.Close, {});

interface TriggerProps extends ComponentProps<typeof Button> {}

export interface DialogProps extends PropsWithChildren {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  triggerContent?: ReactNode;
  triggerProps?: TriggerProps;
  triggerButton?: ReactNode;
  dialogTitle?: ReactNode;
  dialogDescription?: ReactNode;
  dialogSize?: ComponentProps<typeof DialogContent>["size"];
}

export const DialogRoot: FC<DialogProps> = ({
  defaultOpen = false,
  onOpenChange,
  open = false,
  triggerProps,
  triggerButton,
  triggerContent,
  dialogDescription,
  dialogTitle,
  children,
  dialogSize,
}) => {
  const transitions = useTransition(open, {
    from: { opacity: 0, transform: "translate(-50%, -50%) scale(0.9)" },
    enter: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
    leave: { opacity: 0, transform: "translate(-50%, -50%) scale(0.9)" },
    reverse: open,
    config: config.stiff,
  });

  return (
    <DialogPrimitive.Root
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      open={open}
    >
      <DialogPrimitive.Trigger asChild>
        {triggerButton || <Button {...triggerProps}>{triggerContent}</Button>}
      </DialogPrimitive.Trigger>
      {transitions((styles, item) =>
        item ? (
          <DialogPrimitive.Portal forceMount>
            <DialogOverlay forceMount asChild>
              <animated.div
                style={{
                  opacity: styles.opacity,
                }}
              />
            </DialogOverlay>
            <DialogContent size={dialogSize} forceMount asChild>
              <animated.div style={styles}>
                {!!dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}
                {!!dialogDescription && (
                  <DialogDescription>{dialogDescription}</DialogDescription>
                )}
                {children}
                <DialogClose asChild>
                  <IconButton type="button" aria-label="Fechar">
                    <Icons.Close size={24} />
                  </IconButton>
                </DialogClose>
              </animated.div>
            </DialogContent>
          </DialogPrimitive.Portal>
        ) : null,
      )}
    </DialogPrimitive.Root>
  );
};

export interface DialogCloseProps extends ComponentProps<typeof DialogClose> {}

DialogClose.displayName = "Dialog.Close";
DialogRoot.displayName = "Dialog.Root";

export const Dialog = {
  Root: DialogRoot,
  Close: DialogClose,
};
