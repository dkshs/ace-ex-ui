import { render, screen } from "@testing-library/react";

import { Select } from "./Select";

describe("Select component", () => {
  it("should render the Select", () => {
    render(
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder="test" />
        </Select.Trigger>
      </Select.Root>,
    );

    const selectTrigger = screen.getByRole("combobox");
    expect(selectTrigger).toBeInTheDocument();
  });

  it("should render the Select as required", () => {
    render(
      <Select.Root required>
        <Select.Trigger>
          <Select.Value placeholder="test" />
        </Select.Trigger>
      </Select.Root>,
    );

    const selectTrigger = screen.getByRole("combobox");
    expect(selectTrigger).toBeRequired();
  });

  it("should render the Select with defaultValue", () => {
    render(
      <Select.Root defaultValue="done">
        <Select.Trigger>
          <Select.Value placeholder="test" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="done">Done</Select.Item>
        </Select.Content>
      </Select.Root>,
    );

    const selectTrigger = screen.getByText("Done");
    expect(selectTrigger).toBeInTheDocument();
  });

  it("should render the Select disabled", () => {
    render(
      <Select.Root defaultValue="done" disabled>
        <Select.Trigger disabled>
          <Select.Value placeholder="test" />
        </Select.Trigger>
      </Select.Root>,
    );

    const selectTrigger = screen.getByRole("combobox");
    expect(selectTrigger).toBeDisabled();
  });
});
