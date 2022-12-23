import type { Meta, StoryObj } from "@storybook/react";
import { Image, ImageProps } from "@ace-ex/react";

export default {
  title: "Components/Image",
  component: Image,
  id: "image",
  parameters: {
    docs: {
      description: {
        component: "Um componente para Imagens.",
      },
    },
  },
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    src: {
      description: "Especifica o URL de origem de uma imagem.",
      table: { type: { summary: "string" } },
    },
    alt: {
      description:
        "Fornece informações alternativas se um usuário não puder visualizar a imagem, por ex. devido à conexão lenta, um erro no atributo src ou se o usuário usa um leitor de tela.",
      table: { type: { summary: "string" } },
    },
    css: {
      description: "Estilizações css inline podem ser colocadas aqui!",
      table: { type: { summary: "Object" } },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    src: "/illustration-waves.avif",
    css: { width: "100%" },
    alt: "Foto do oceano com a água se mexendo.",
  },
} as Meta<ImageProps>;

export const Primary: StoryObj<ImageProps> = {};
