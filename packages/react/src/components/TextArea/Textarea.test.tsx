import { render, screen, fireEvent } from "@testing-library/react";

import { TextArea } from "./TextArea";

describe("TextArea component", () => {
  it("should render the text-area", () => {
    render(<TextArea></TextArea>);

    const textArea = screen.getByRole("textbox");
    expect(textArea).toBeInTheDocument();
  });

  it("should render text-area disabled", () => {
    render(<TextArea disabled></TextArea>);

    const textArea = screen.getByRole("textbox");
    expect(textArea).toBeDisabled();
  });

  it("should render text-area with value", () => {
    render(<TextArea defaultValue="Initial value"></TextArea>);

    const textArea = screen.getByRole("textbox");
    expect(textArea).toBeInTheDocument();

    expect(textArea.textContent).toBe("Initial value");
  });

  it("should onchange handler is called", () => {
    render(<TextArea></TextArea>);

    const textArea = screen.getByRole("textbox");
    expect(textArea).toBeInTheDocument();

    fireEvent.change(textArea, { target: { defaultValue: "Test" } });
    expect(textArea.textContent).toBe("Test");
  });
});
