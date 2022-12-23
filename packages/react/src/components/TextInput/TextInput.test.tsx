import { render, screen, fireEvent } from "@testing-library/react";

import { Icon } from "../Icons";
import { TextInput } from "./TextInput";

describe("TextInput component", () => {
  it("should render the TextInput", () => {
    render(
      <TextInput.Root>
        <TextInput.Input />
      </TextInput.Root>,
    );

    const textRoot = screen.getByRole("textbox");
    expect(textRoot).toBeInTheDocument();
  });

  it("should render the TextInput with value", () => {
    render(
      <TextInput.Root>
        <TextInput.Input />
      </TextInput.Root>,
    );

    // const textInput = screen.getByRole("textbox");
    const textInput = document.querySelector("input");
    expect(textInput).toBeInTheDocument();

    fireEvent.change(textInput!, { target: { value: "https://localhost" } });
    expect(textInput?.value).toBe("https://localhost");
  });

  it("should render the TextInput with prefix", () => {
    render(
      <TextInput.Root>
        <TextInput.Input />
        <TextInput.Prefix>Prefix</TextInput.Prefix>
      </TextInput.Root>,
    );

    expect(screen.getByText(/Prefix/i)).toBeInTheDocument();
  });

  it("should render the TextInput with icon", () => {
    render(
      <TextInput.Root data-testid="test">
        <TextInput.Input />
        <TextInput.Icon>
          <Icon iconName="Check" />
        </TextInput.Icon>
      </TextInput.Root>,
    );

    const inputRoot = screen.getByTestId(/test/i);

    expect(inputRoot).toBeInTheDocument();
    expect(inputRoot).toContainHTML("svg");
  });

  it("should render the textInput disabled", () => {
    render(
      <TextInput.Root>
        <TextInput.Input disabled />
      </TextInput.Root>,
    );

    const textInput = screen.getByRole("textbox");
    expect(textInput).toBeDisabled();
  });
});
