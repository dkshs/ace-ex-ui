import type { Meta, StoryObj } from "@storybook/react";
import {
  Header,
  HeaderCompleteProps,
  HeaderLinkProps,
  Button,
  Box,
  Icons,
} from "@ace-ex/react";

const navLinks: HeaderLinkProps[] = [
  {
    href: "/",
    label: "Home",
    title: "Ir para o início",
    variant: "Active",
  },
  {
    href: "/login",
    label: "Login",
    title: "Ir para a página de login",
  },
  {
    href: "/signup",
    label: "Cadastro",
    title: "Ir para a página de cadastro",
  },
];

export default {
  title: "Components/Header",
  component: Header.Complete,
  id: "header",
  parameters: {
    docs: {
      description: {
        component: "Um componente de cabeçalho.",
      },
    },
  },
  argTypes: {
    imgLogo: {
      description: "Logo do cabeçalho.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    btnThemeToggle: {
      description: "O botão alternador de tema.",
      control: {
        type: null,
      },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    navLinks: {
      type: { name: "other", value: "Array<object>" },
      table: {
        type: {
          summary: "Array<object>",
          detail:
            '{\n  href: string,\n  label: string,\n  title?: string,\n  variant?: "Active" | "notActive",\n  isHidden?: boolean \n}[]',
        },
      },
    },
  },
  args: {
    imgLogo: "/logo.svg",
    navLinks,
    btnThemeToggle: (
      <Button
        variant="tertiary"
        size="md"
        aria-label="Trocar tema"
        title="Test button"
        css={{ "&:hover": { svg: { color: "$primary" } } }}
      >
        <Icons.Sun size={25} weight="bold" />
      </Button>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ position: "relative", height: "50vh" }}>{Story()}</Box>
      );
    },
  ],
} as Meta<HeaderCompleteProps>;

export const Primary: StoryObj<HeaderCompleteProps> = {};

export const HeaderWithUserLogged: StoryObj<HeaderCompleteProps> = {
  args: {
    userIsLogged: true,
    userInfo: {
      userImg: "https://github.com/dkshs.png",
      username: "dkshs",
    },
    navLinks: [
      {
        href: "/",
        label: "Home",
        title: "Ir para o início",
        variant: "Active",
      },
    ],
    userLinks: [
      {
        label: "Perfil",
        href: "/profile",
        title: "Ver perfil",
        variant: "notActive",
      },
    ],
  },
};

export const HeaderWithUserNotLogged: StoryObj<HeaderCompleteProps> = {
  args: {
    userIsLogged: false,
  },
};

export const WithoutLogoImage: StoryObj<HeaderCompleteProps> = {
  args: {
    imgLogo: "",
  },
};

export const WithoutLinks: StoryObj<HeaderCompleteProps> = {
  args: {
    navLinks: [],
  },
};

export const WithoutBtnThemeToggle: StoryObj<HeaderCompleteProps> = {
  args: {
    btnThemeToggle: "",
  },
};

export const WithNavLinkHidden: StoryObj<HeaderCompleteProps> = {
  args: {
    navLinks: [
      {
        href: "/",
        label: "Home",
        title: "Ir para o início",
        variant: "Active",
      },
      { href: "/", label: "Home Hidden", isHidden: true },
      {
        href: "/?path=/docs/header--primary",
        label: "Header",
        title: "Ver o componente Header",
      },
    ],
  },
};

export const WithTwoNavLinkActive: StoryObj<HeaderCompleteProps> = {
  args: {
    navLinks: [
      {
        href: "/",
        label: "Home",
        title: "Ir para o início",
        variant: "Active",
      },
      { href: "/", label: "Active", variant: "Active" },
    ],
  },
};
