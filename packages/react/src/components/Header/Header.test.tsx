import { render, screen } from "@testing-library/react";

import { Header, HeaderLinkProps } from "./Header";

const navLinks: HeaderLinkProps[] = [
  { href: "/", label: "Home", title: "Go to Home" },
  { href: "/about", label: "About", title: "Go to about page" },
];

describe("Header component", () => {
  it("should render the Header", () => {
    render(<Header.Complete navLinks={navLinks} />);

    const header = screen.getByRole("navigation");
    expect(header).toBeInTheDocument();
  });

  it("should render the Header with Logo Img", () => {
    render(<Header.Complete imgLogo="logo-test.png" />);

    const header = screen.getByAltText("Logo");
    expect(header).toBeInTheDocument();
  });

  it("should render the Header with custom NavLinks", () => {
    render(
      <Header.Complete
        navLinks={[
          { href: "/", label: "Home", title: "Go to Home" },
          { href: "/about", label: "About", title: "Go to about page" },
        ]}
      />,
    );

    const homeLink = screen.getByTitle("Go to Home");
    const aboutLink = screen.getByTitle("Go to about page");
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it("should render the Header with a hidden NavLink", () => {
    render(
      <Header.Complete
        navLinks={[
          { href: "/", label: "Home", title: "Go to Home", isHidden: true },
        ]}
      />,
    );

    const homeLink = screen.queryByText("Home");
    expect(homeLink).not.toBeInTheDocument();
  });

  it("should render the Header without Logo img", () => {
    render(<Header.Complete />);

    const logo = screen.queryByAltText("Logo");
    expect(logo).not.toBeInTheDocument();
  });

  it("should render the Header without button ThemeToggle", () => {
    render(<Header.Complete />);

    const btnThemeToggle = screen.queryByLabelText("Trocar tema");
    expect(btnThemeToggle).not.toBeInTheDocument();
  });

  it("should render the Header with user menu", () => {
    render(
      <Header.Complete
        userInfo={{
          userImg: "https://github.com/dkshs.png",
          username: "User",
        }}
        userIsLogged
        userLinks={navLinks}
      />,
    );

    const userMenu = screen.getByLabelText("Menu do usuário");
    expect(userMenu).toBeInTheDocument();
  });

  it("should render the Header without user menu", () => {
    render(<Header.Complete />);

    const userMenu = screen.queryByLabelText("Menu do usuário");
    expect(userMenu).not.toBeInTheDocument();
  });
});
