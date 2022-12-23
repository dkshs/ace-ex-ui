import { render, screen } from "@testing-library/react";

import { AlertDialog } from "./AlertDialog";

describe("AlertDialog component", () => {
  it("should render the AlertDialog", () => {
    render(<AlertDialog.Root triggerContent="Deletar conta" />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Deletar conta")).toBeInTheDocument();
  });

  it("should onOpenChange handler is called", async () => {
    const onOpenChangeSpy = jest.fn();
    render(<AlertDialog.Root onOpenChange={onOpenChangeSpy} />);
    const buttonElement = screen.getByRole("button");
    buttonElement.click();
    expect(onOpenChangeSpy).toHaveBeenCalled();
  });

  it("should render the AlertDialog open", () => {
    render(
      <AlertDialog.Root
        open={true}
        triggerContent="Deletar conta"
        dialogTitle="Você tem certeza absoluta?"
      />,
    );

    expect(screen.getByText("Deletar conta")).toBeInTheDocument();
    expect(screen.getByText("Você tem certeza absoluta?")).toBeInTheDocument();
  });

  it("should render the AlertDialog trigger disabled", () => {
    render(<AlertDialog.Root triggerProps={{ disabled: true }} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
