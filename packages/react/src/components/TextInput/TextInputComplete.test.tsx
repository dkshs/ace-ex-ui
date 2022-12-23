import { render, screen, fireEvent } from "@testing-library/react";

import { Icon } from "../Icons";
import { TextInput } from "./TextInput";

describe("TextInput.Complete component", () => {
  it("should render the TextInput", () => {
    render(<TextInput.Complete />);

    const textInput = screen.getByRole("textbox");
    expect(textInput).toBeInTheDocument();
  });

  it("should render the TextInput with dynamic value", () => {
    render(<TextInput.Complete />);

    const textInput = document.querySelector("input");

    fireEvent.change(textInput!, { target: { value: "https://" } });
    expect(textInput?.value).toBe("https://");
  });

  it("should render the TextInput with a icon", () => {
    render(
      <TextInput.Complete
        aria-label="test label"
        icon={<Icon iconName="Email" />}
      />,
    );

    const textInput = screen.getAllByLabelText("test label");
    expect(textInput[0]).toContainHTML("svg");
  });

  it("should render the TextInput with a prefix", () => {
    render(<TextInput.Complete prefix="https://" />);

    const textInput = screen.getByText("https://");
    expect(textInput).toBeInTheDocument();
  });

  it("should render the textInput disabled", () => {
    render(<TextInput.Complete prefix="https://" disabled />);

    const textInput = screen.getByRole("textbox");
    expect(textInput).toBeDisabled();
  });
});
