// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { useTransition, animated, config } from "react-spring";
import { transparentize } from "polished";
import { colors } from "@ace-ex/tokens";
import { darkTheme, styled } from "../../styles";

import { Button } from "../Button";
import { Box } from "../Box";

const DialogOverlay = styled(AlertDialogPrimitive.Overlay, {
  backdropFilter: "blur(8px)",
  position: "fixed",
  inset: 0,
  zIndex: 99,
});

const DialogContent = styled(AlertDialogPrimitive.Content, {
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
    bc: `${transparentize(0.8, colors.gray800)}`,
    backdropFilter: "blur(24px)",
    border: "2px solid $gray700",
  },

  defaultVariants: {
    size: "md",
  },
});

const DialogTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  fontWeight: "$medium",
  color: "$primary",
  fontSize: "$xl",
});

const DialogDescription = styled(AlertDialogPrimitive.Description, {
  mt: "$2-5",
  mb: "$5",
  color: "$gray500",
  fontWeight: "$medium",
  fontSize: "$md",

  [`.${darkTheme} &`]: {
    color: "$gray400",
  },
});

const AlertDialogCancel = styled(AlertDialogPrimitive.Cancel, {});
const AlertDialogAction = styled(AlertDialogPrimitive.Action, {});

interface TriggerProps extends ComponentProps<typeof Button> {}

export interface AlertDialogProps extends PropsWithChildren {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  triggerContent?: ReactNode;
  triggerProps?: TriggerProps;
  triggerButton?: ReactNode;
  dialogTitle?: ReactNode;
  dialogDescription?: ReactNode;
  dialogSize?: ComponentProps<typeof DialogContent>["size"];
  buttonCancel?: ReactNode;
  buttonAction?: ReactNode;
}

const AlertDialogRoot: FC<AlertDialogProps> = ({
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
  buttonAction,
  buttonCancel,
}) => {
  const transitions = useTransition(open, {
    from: { opacity: 0, transform: "translate(-50%, -50%) scale(0.9)" },
    enter: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
    leave: { opacity: 0, transform: "translate(-50%, -50%) scale(0.9)" },
    reverse: open,
    config: config.stiff,
  });

  return (
    <AlertDialogPrimitive.Root
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      open={open}
    >
      <AlertDialogPrimitive.Trigger asChild>
        {triggerButton || <Button {...triggerProps}>{triggerContent}</Button>}
      </AlertDialogPrimitive.Trigger>
      {transitions((styles, item) =>
        item ? (
          <AlertDialogPrimitive.Portal forceMount>
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
                {buttonCancel || buttonAction ? (
                  <Box
                    css={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "$3",
                    }}
                  >
                    {!!buttonCancel && (
                      <AlertDialogPrimitive.Cancel asChild>
                        {buttonCancel}
                      </AlertDialogPrimitive.Cancel>
                    )}
                    {!!buttonAction && (
                      <AlertDialogPrimitive.Action asChild>
                        {buttonAction}
                      </AlertDialogPrimitive.Action>
                    )}
                  </Box>
                ) : null}
              </animated.div>
            </DialogContent>
          </AlertDialogPrimitive.Portal>
        ) : null,
      )}
    </AlertDialogPrimitive.Root>
  );
};

AlertDialogRoot.displayName = "AlertDialog.Root";

AlertDialogCancel.displayName = "AlertDialog.Cancel";
AlertDialogAction.displayName = "AlertDialog.Action";

export const AlertDialog = {
  Root: AlertDialogRoot,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
};
