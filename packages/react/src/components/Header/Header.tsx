// eslint-disable-next-line no-unused-vars
import type * as Stitches from "@stitches/react";

import type { ComponentProps, ElementType, ReactNode } from "react";

import { transparentize } from "polished";
import { darkTheme, styled } from "../../styles";
import { colors } from "@ace-ex/tokens";

import { Box } from "../Box";
import { DropdownMenu } from "../DropdownMenu";
import { Link as LinkPrimitive } from "../Link";

import { Icons } from "../Icons";

const HeaderRoot = styled("header", {
  top: 0,
  width: "100%",
  height: "$16",
  position: "sticky",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$primary",
  bc: "$backgroundOpacity",
  pl: "$4",
  pr: "$5",
  backdropFilter: "blur(12px)",
  boxShadow: "$headerShadow",

  zIndex: 99,

  "@md": {
    pl: "$6",
    pr: "$7",
  },
});

const HeaderContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  size: "100%",
});

const LogoContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$3",
  zIndex: 2,
});

const LogoLink = styled("a", {
  outline: 0,
  size: "$12",
  br: "$md",
  "&:hover, &:focus-visible": {
    ring: "$colors$blue500",
  },
});

const Logo = styled("img", {
  size: "100%",
  br: "$md",
  bg: `${transparentize(0.8, colors.blue400)}`,

  [`.${darkTheme} &`]: {
    bg: "$gray900",
  },
});

const NavBar = styled("nav", {
  display: "none",
  insetX: "0px",
  size: "100%",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "$medium",
  height: "100%",
  gap: "$4",

  "@sm": {
    display: "flex",
  },
});

const NavLink = styled("a", {
  outline: 0,
  outlineColor: "$blue600",
  textDecoration: "none",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: "$2",
  borderBottom: "2px solid transparent",

  variants: {
    variant: {
      Active: {
        borderColor: "$blue600",
        color: "$blue600",
      },
      notActive: {
        color: "$primary",
        "&:hover": {
          opacity: 0.7,
        },
      },
    },
  },

  "&:focus-visible": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    br: "$md",
  },

  defaultVariants: {
    variant: "notActive",
  },
});

export interface HeaderRootProps extends ComponentProps<typeof HeaderRoot> {}
export interface HeaderContainerProps
  extends ComponentProps<typeof HeaderContainer> {}
export interface LogoContainerProps
  extends ComponentProps<typeof LogoContainer> {}
export interface NavBarProps extends ComponentProps<typeof NavBar> {}
export interface NavLinkProps extends ComponentProps<typeof NavLink> {}

export interface HeaderLinkProps {
  href: string;
  label: string;
  title?: string;
  variant?: NavLinkProps["variant"];
  isHidden?: boolean;
}

export interface HeaderUserInfoProps {
  username: string;
  userImg: string;
}

export interface HeaderCompleteProps extends ComponentProps<typeof HeaderRoot> {
  imgLogo?: string;
  navLinks?: HeaderLinkProps[];
  userLinks?: HeaderLinkProps[];
  btnThemeToggle?: ReactNode;
  linksAs?: ElementType;
  imageAs?: ElementType;
  userIsLogged?: boolean;
  userInfo?: HeaderUserInfoProps;
}

const HeaderComplete = ({
  imgLogo,
  navLinks,
  userLinks,
  linksAs,
  imageAs,
  btnThemeToggle,
  userIsLogged = false,
  userInfo,
  ...props
}: HeaderCompleteProps) => {
  const Link = linksAs || "a";
  const Image = imageAs || "img";

  return (
    <HeaderRoot {...props}>
      <HeaderContainer>
        <LogoContainer>
          {!!imgLogo && (
            <LogoLink as={Link} href="/" title="Ir para o início">
              <Logo
                as={Image}
                alt="Logo"
                src={imgLogo}
                width={48}
                height={48}
              />
            </LogoLink>
          )}
          {!!navLinks && navLinks.length > 0 && (
            <DropdownMenu.Root
              triggerOptions={{
                "aria-label": "Menu de navegação",
                size: "lg",
                css: {
                  "@sm": {
                    display: "none",
                  },
                },
              }}
            >
              {navLinks &&
                navLinks.map(
                  ({ href, label, title, isHidden, variant }, i) =>
                    !isHidden && (
                      <DropdownMenu.Item key={i} isLink asChild>
                        <LinkPrimitive as={Link} href={href} title={title}>
                          {label}
                          {variant === "Active" && (
                            <DropdownMenu.RightSlot>
                              <Icons.Check css={{ color: "$green500" }} />
                            </DropdownMenu.RightSlot>
                          )}
                        </LinkPrimitive>
                      </DropdownMenu.Item>
                    ),
                )}
            </DropdownMenu.Root>
          )}
        </LogoContainer>
        {navLinks && navLinks.length > 0 && (
          <NavBar>
            {navLinks.map(
              ({ href, label, title, isHidden, variant }, i) =>
                !isHidden && (
                  <NavLink
                    as={Link}
                    key={i}
                    href={href}
                    variant={variant}
                    title={title}
                  >
                    {label}
                  </NavLink>
                ),
            )}
          </NavBar>
        )}

        <Box
          css={{ display: "flex", alignItems: "center", gap: "$3", zIndex: 2 }}
        >
          {!!btnThemeToggle && btnThemeToggle}

          {!!userLinks && userLinks.length > 0 && userIsLogged && (
            <DropdownMenu.Root
              iconMenu={false}
              userInfo={userInfo}
              triggerOptions={{
                "aria-label": "Menu do usuário",
                size: "md",
                rounded: "full",
                isUserMenu: true,
                title: "Menu do usuário",
              }}
            >
              <DropdownMenu.Group>
                {userLinks.map(
                  ({ href, label, title, isHidden, variant }, i) =>
                    !isHidden && (
                      <DropdownMenu.Item key={i} isLink asChild>
                        <LinkPrimitive as={Link} href={href} title={title}>
                          {label}
                          {variant === "Active" && (
                            <DropdownMenu.RightSlot>
                              <Icons.Check css={{ color: "$green500" }} />
                            </DropdownMenu.RightSlot>
                          )}
                        </LinkPrimitive>
                      </DropdownMenu.Item>
                    ),
                )}
              </DropdownMenu.Group>
            </DropdownMenu.Root>
          )}
        </Box>
      </HeaderContainer>
    </HeaderRoot>
  );
};

HeaderComplete.displayName = "Header.Complete";

HeaderRoot.displayName = "Header.Root";
HeaderContainer.displayName = "Header.Container";
LogoContainer.displayName = "Header.LogoContainer";
NavBar.displayName = "Header.NavBar";
NavLink.displayName = "Header.NavLink";

export const Header = {
  Root: HeaderRoot,
  Container: HeaderContainer,
  LogoContainer,
  NavBar,
  NavLink,
  Complete: HeaderComplete,
};
