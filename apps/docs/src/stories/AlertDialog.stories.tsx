import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AlertDialog, AlertDialogProps, Box, Button } from "@ace-ex/react";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog.Root,
  id: "alert-dialog",
  parameters: {
    docs: {
      description: {
        component: "Um componente de alerta de Diálogo.",
      },
    },
  },
  argTypes: {
    dialogSize: {
      description: "Largura do AlertDialog.",
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
      description: "Handler do AlertDialog.",
      action: "change",
    },
    open: {
      description: "O AlertDialog está aberto?",
      table: {
        type: { summary: "boolean" },
      },
    },
    triggerContent: {
      description: "O conteúdo do botão do AlertDialog.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    dialogTitle: {
      description: "Titulo do AlertDialog.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    dialogDescription: {
      description: "Descrição do AlertDialog.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    buttonAction: {
      description: "Botão que irá fazer uma ação.",
      control: {
        type: null,
      },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    buttonCancel: {
      description: "Botão que irá cancelar a ação.",
      control: {
        type: null,
      },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    open: false,
    dialogSize: "md",
    triggerContent: "Deletar conta",
    dialogTitle: "Você tem certeza absoluta?",
    dialogDescription:
      "Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.",
    buttonAction: (
      <Button variant="danger" size="lg">
        Sim, excluir conta
      </Button>
    ),
    buttonCancel: (
      <Button variant="tertiary" size="lg">
        Cancelar
      </Button>
    ),
  },
  decorators: [
    (Story) => {
      return <Box css={{ maxWidth: "150px" }}>{Story()}</Box>;
    },
  ],
} as Meta<AlertDialogProps>;

export const Primary: StoryObj<AlertDialogProps> = {};

export const WithTriggerCustom: StoryObj<AlertDialogProps> = {
  args: {
    triggerButton: (
      <Button variant="tertiary" size="md">
        Deletar conta
      </Button>
    ),
  },
};

export const Functional = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog.Root
      dialogTitle="Você tem certeza absoluta?"
      dialogDescription="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores."
      triggerContent="Deletar conta"
      open={isOpen}
      onOpenChange={setIsOpen}
      dialogSize="xl"
      buttonAction={
        <Button variant="danger" size="lg">
          Sim, excluir conta
        </Button>
      }
      buttonCancel={
        <Button variant="tertiary" size="lg">
          Cancelar
        </Button>
      }
    />
  );
};

export const WithTriggerCustomDisabled: StoryObj<AlertDialogProps> = {
  args: {
    triggerButton: (
      <Button disabled variant="tertiary" size="md">
        Disabled
      </Button>
    ),
  },
};
