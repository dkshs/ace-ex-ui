import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button component", () => {
  it("should render the Button", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText(/Button/i)).toBeInTheDocument();
  });

  it("should onclick handler is called", async () => {
    const onClickSpy = jest.fn();
    render(<Button onClick={onClickSpy} />);
    const buttonElement = screen.getByRole("button");
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
  });

  it("should onclick handler is not called when disabled", async () => {
    const onClickSpy = jest.fn();
    render(<Button onClick={onClickSpy} disabled />);
    screen.getByRole("button").click();
    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it("should render the Button disabled", () => {
    render(<Button disabled />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
