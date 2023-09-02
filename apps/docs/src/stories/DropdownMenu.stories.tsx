import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu, DropdownMenuProps, Link, Box } from "@ace-ex/react";

const items = [{ text: "Home" }, { text: "Login" }, { text: "Register" }];
const linkItems = [
  { text: "Home", href: "/" },
  { text: "Login", href: "/login" },
  { text: "Register", href: "/register" },
];

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu.Root,
  id: "dropdown-menu",
  parameters: {
    docs: {
      description: {
        component: "Um componente de Menu.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Os items do menu irão dentro do DropdownMenu.Root",
      control: {
        type: null,
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    imageComp: {
      description: "Componente de imagem para a foto de perfil, caso utilize.",
    },
    iconMenu: {
      description: "Deseja um ícone de menu?",
    },
    userInfo: {
      description: "Caso queria fazer um menu de usuário.",
      table: {
        type: { detail: "username: string, userImg: string" },
      },
    },
  },
  args: {
    children: [
      items.map((props, i) => (
        <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
      )),
    ],
  },
} as Meta<DropdownMenuProps>;

export const Primary: StoryObj<DropdownMenuProps> = {};

export const UserMenu: StoryObj<DropdownMenuProps> = {
  args: {
    userInfo: {
      userImg: "https://github.com/dkshs.png",
      username: "User",
    },
    triggerOptions: { isUserMenu: true, rounded: "md", size: "lg" },
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: "flex", gap: "$4", p: "$4" }}>
          <DropdownMenu.Root
            triggerOptions={{
              isUserMenu: true,
              rounded: "md",
              size: "sm",
            }}
            userInfo={{
              userImg: "https://github.com/dkshs.png",
              username: "User",
            }}
          >
            {items.map((props, i) => (
              <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
            ))}
          </DropdownMenu.Root>
          <DropdownMenu.Root
            triggerOptions={{
              isUserMenu: true,
              rounded: "md",
              size: "md",
            }}
            userInfo={{
              userImg: "https://github.com/dkshs.png",
              username: "User",
            }}
          >
            {items.map((props, i) => (
              <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
            ))}
          </DropdownMenu.Root>
          {Story()}
          <DropdownMenu.Root
            triggerOptions={{
              isUserMenu: true,
              rounded: "full",
              size: "sm",
            }}
            userInfo={{
              userImg: "https://github.com/dkshs.png",
              username: "User",
            }}
          >
            {items.map((props, i) => (
              <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
            ))}
          </DropdownMenu.Root>
          <DropdownMenu.Root
            triggerOptions={{
              isUserMenu: true,
              rounded: "full",
              size: "md",
            }}
            userInfo={{
              userImg: "https://github.com/dkshs.png",
              username: "User",
            }}
          >
            {items.map((props, i) => (
              <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
            ))}
          </DropdownMenu.Root>
          <DropdownMenu.Root
            triggerOptions={{
              isUserMenu: true,
              rounded: "full",
              size: "lg",
            }}
            userInfo={{
              userImg: "https://github.com/dkshs.png",
              username: "User",
            }}
          >
            {items.map((props, i) => (
              <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
            ))}
          </DropdownMenu.Root>
        </Box>
      );
    },
  ],
};

export const WithGroup: StoryObj<DropdownMenuProps> = {
  args: {
    children: [
      <DropdownMenu.Group key={1}>
        {items.map((props, i) => (
          <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
        ))}
      </DropdownMenu.Group>,
    ],
  },
};

export const WithGroupLabel: StoryObj<DropdownMenuProps> = {
  args: {
    children: [
      <DropdownMenu.Group key={1} label="Items">
        {items.map((props, i) => (
          <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
        ))}
      </DropdownMenu.Group>,
    ],
  },
};

export const WithLabel: StoryObj<DropdownMenuProps> = {
  args: {
    children: [
      <DropdownMenu.Group key={1}>
        <DropdownMenu.Label>Items</DropdownMenu.Label>
        {items.map((props, i) => (
          <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
        ))}
      </DropdownMenu.Group>,
    ],
  },
};

export const WithLinkItems: StoryObj<DropdownMenuProps> = {
  args: {
    children: [
      linkItems.map((props, i) => (
        <DropdownMenu.Item key={i} isLink asChild>
          <Link href={props.href}>{props.text}</Link>
        </DropdownMenu.Item>
      )),
    ],
  },
};

export const WithSubContent: StoryObj<DropdownMenuProps> = {
  args: {
    children: [
      items.map((props, i) => (
        <DropdownMenu.Item key={i}>{props.text}</DropdownMenu.Item>
      )),
      <DropdownMenu.SubContent key={1} subTriggerProps={{ text: "Links" }}>
        {linkItems.map((props, i) => (
          <DropdownMenu.Item key={i} isLink asChild>
            <Link href={props.href}>{props.text}</Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.SubContent>,
    ],
  },
};

export const WithCheckboxItems: StoryObj<DropdownMenuProps> = {
  args: {
    children: [
      <DropdownMenu.Group key={1}>
        <DropdownMenu.CheckboxItem
          checked={true}
          onCheckedChange={(e) => console.log(e)}
          text="Checked"
        />
        <DropdownMenu.CheckboxItem
          checked={false}
          onCheckedChange={(e) => console.log(e)}
          text="Not checked"
        />
      </DropdownMenu.Group>,
    ],
  },
};

export const WithRadioItems: StoryObj<DropdownMenuProps> = {
  args: {
    children: [
      <DropdownMenu.RadioGroup key={1} value="marked">
        <DropdownMenu.RadioItem value="marked">Marked</DropdownMenu.RadioItem>
        <DropdownMenu.RadioItem value="not-marked">
          Not marked
        </DropdownMenu.RadioItem>
      </DropdownMenu.RadioGroup>,
    ],
  },
};
