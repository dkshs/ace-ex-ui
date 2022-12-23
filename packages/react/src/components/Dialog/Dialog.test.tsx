import { render, screen } from "@testing-library/react";

import { DialogRoot } from "./Dialog";

describe("Dialog component", () => {
  it("should render the Dialog", () => {
    render(<DialogRoot triggerContent="Open dialog" />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Open dialog")).toBeInTheDocument();
  });

  it("should onOpenChange handler is called", async () => {
    const onOpenChangeSpy = jest.fn();
    render(<DialogRoot onOpenChange={onOpenChangeSpy} />);
    const buttonElement = screen.getByRole("button");
    buttonElement.click();
    expect(onOpenChangeSpy).toHaveBeenCalled();
  });

  it("should render the Dialog open", () => {
    render(
      <DialogRoot
        open={true}
        dialogDescription="Dialog description"
        dialogTitle="Dialog title"
      />,
    );

    expect(screen.getByText("Dialog title")).toBeInTheDocument();
    expect(screen.getByText("Dialog description")).toBeInTheDocument();
  });

  it("should render the Dialog trigger disabled", () => {
    render(<DialogRoot triggerProps={{ disabled: true }} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
