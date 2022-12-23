import { render, screen } from "@testing-library/react";

import { Select, SelectOptionProps } from "./Select";

const options: SelectOptionProps[] = [
  {
    label: "Error",
    value: "error",
  },
  {
    label: "Done",
    value: "done",
  },
  {
    label: "Warn",
    value: "warn",
  },
];

describe("SelectComplete component", () => {
  it("should render the Select", () => {
    render(<Select.Complete options={options} placeholder="test" />);

    const selectTrigger = screen.getByRole("combobox");
    expect(selectTrigger).toBeInTheDocument();
  });

  it("should render the Select with custom placeholder", () => {
    render(
      <Select.Complete options={options} placeholder="custom placeholder" />,
    );

    const selectTrigger = screen.getByText("custom placeholder");
    expect(selectTrigger).toBeInTheDocument();
  });

  it("should render the Select as required", () => {
    render(<Select.Complete options={options} required />);

    const selectTrigger = screen.getByRole("combobox");
    expect(selectTrigger).toBeRequired();
  });

  it("should render the Select with defaultValue", () => {
    render(<Select.Complete options={options} defaultValue="done" />);

    const selectTrigger = screen.getByText("Done");
    expect(selectTrigger).toBeInTheDocument();
  });

  it("should render the Select disabled", () => {
    render(<Select.Complete options={options} disabled />);

    const selectTrigger = screen.getByRole("combobox");
    expect(selectTrigger).toBeDisabled();
  });
});
