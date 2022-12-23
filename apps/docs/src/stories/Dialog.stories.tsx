import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Dialog,
  DialogProps,
  darkTheme,
  Box,
  Button,
  Text,
  TextInput,
} from "@ace-ex/react";

export default {
  title: "Components/Dialog",
  component: Dialog.Root,
  id: "dialog",
  parameters: {
    docs: {
      description: {
        component: "Um componente de Diálogo.",
      },
    },
  },
  argTypes: {
    dialogSize: {
      description: "Largura do Dialog.",
      control: {
        type: "inline-radio",
        options: ["sm", "md", "lg", "xl"],
      },
      table: {
        type: { summary: '"sm" | "md" | "lg" | "xl"' },
      },
    },
    triggerButton: {
      description: "Quer colocar um botão personalizado?",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onOpenChange: {
      description: "Handler do Dialog.",
      action: "change",
    },
    open: {
      description: "O Dialog está aberto?",
      table: {
        type: { summary: "boolean" },
      },
    },
    triggerContent: {
      description: "O conteúdo do botão do Dialog.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    dialogTitle: {
      description: "Titulo do Dialog.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    dialogDescription: {
      description: "Descrição do Dialog.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    open: false,
    dialogSize: "md",
    triggerContent: "Open dialog",
    dialogTitle: "Dialog title",
    dialogDescription: "Dialog description",
  },
  decorators: [
    (Story) => {
      return <Box css={{ maxWidth: "150px" }}>{Story()}</Box>;
    },
  ],
} as Meta<DialogProps>;

export const Primary: StoryObj<DialogProps> = {};

export const WithTriggerCustom: StoryObj<DialogProps> = {
  args: {
    triggerButton: (
      <Button variant="tertiary" size="md">
        Open Dialog
      </Button>
    ),
  },
};

export const Functional = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root
      dialogTitle="Editar perfil"
      dialogDescription="Faça alterações no seu perfil aqui. Clique em salvar quando terminar."
      triggerContent="Abrir dialogo"
      open={isOpen}
      onOpenChange={setIsOpen}
      dialogSize="xl"
    >
      <Box
        as="form"
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$1",
          mb: "$4",
        }}
      >
        <Text as="label" htmlFor="name">
          Name:
        </Text>
        <TextInput.Complete
          boxCss={{ [`.${darkTheme} &`]: { bc: "$gray900 !important" } }}
          placeholder="Digite seu nome"
          id="name"
        />
        <Text as="label" htmlFor="username">
          Username
        </Text>
        <TextInput.Complete
          boxCss={{ [`.${darkTheme} &`]: { bc: "$gray900 !important" } }}
          placeholder="Digite seu username"
          id="username"
        />
      </Box>
      <Box
        css={{
          display: "flex",
          gap: "$2",
          flexDirection: "column",
          "@sm": {
            flexDirection: "row",
          },
        }}
      >
        <Dialog.Close asChild>
          <Button onClick={() => console.log("alterações feitas")}>
            Salvar
          </Button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <Button variant="secondary">Cancelar</Button>
        </Dialog.Close>
      </Box>
    </Dialog.Root>
  );
};

export const WithTriggerCustomDisabled: StoryObj<DialogProps> = {
  args: {
    triggerButton: (
      <Button disabled variant="tertiary" size="md">
        Open Dialog
      </Button>
    ),
  },
};
