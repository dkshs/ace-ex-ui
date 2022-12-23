import { render, screen } from "@testing-library/react";

import { DropdownMenu } from "./DropDownMenu";

describe("DropdownMenu component", () => {
  it("should render the DropdownMenu", () => {
    render(<DropdownMenu.Root />);

    const trigger = screen.getByRole("button");
    expect(trigger).toBeInTheDocument();
  });

  it("should render the DropdownUserMenu", () => {
    render(
      <DropdownMenu.Root
        triggerOptions={{ isUserMenu: true }}
        userInfo={{
          username: "User",
          userImg: "https://github.com/ShadowsS01.png",
        }}
      />,
    );

    const trigger = screen.getByRole("button");
    expect(trigger).toContainHTML("span");
  });
});
