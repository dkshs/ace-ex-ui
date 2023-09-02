import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@ace-ex/react";

export default {
  title: "Components/Avatar",
  component: Avatar,
  id: "avatar",
  parameters: {
    docs: {
      description: {
        component: "Um componente de Avatar",
      },
    },
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    css: {
      description: "Estilizações css inline podem ser colocadas aqui!",
      table: { type: { summary: "Object" } },
    },
    src: {
      description: "Especifica o URL de origem de uma imagem.",
      table: { type: { summary: "string" } },
    },
    avatarFallbackProps: {
      description: "Propriedades do Fallback.",
    },
    size: {
      description: "Tamanho disponíveis de Avatar.",
      control: {
        options: ["sm", "md", "lg"],
        type: "inline-radio",
      },
      table: { type: { summary: '"sm" | "md" | "lg"' } },
    },
    alt: {
      description:
        "Fornece informações alternativas se um usuário não puder visualizar o avatar, por ex. devido à conexão lenta, um erro no atributo src ou se o usuário usa um leitor de tela.",
      table: { type: { summary: "string" } },
    },
  },
  args: {
    size: "md",
    src: "https://github.com/dkshs.png",
    alt: "Foto de perfil de dkshs.",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithoutSrc: StoryObj<AvatarProps> = {
  args: {
    src: "",
  },
};
