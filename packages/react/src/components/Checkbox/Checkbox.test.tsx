import { render, screen } from "@testing-library/react";

import { Checkbox } from "./Checkbox";

describe("Checkbox component", () => {
  it("should render the Checkbox", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole(/checkbox/i);
    expect(checkbox).toBeInTheDocument();
  });

  it("should render the Checkbox with label text", () => {
    render(<Checkbox label="Accept terms of use" />);

    const checkbox = screen.getByText(/Accept terms of use/i);
    expect(checkbox).toBeInTheDocument();
  });

  it("should render the Checkbox checked", () => {
    render(<Checkbox checked />);

    const checkbox = screen.getByRole(/checkbox/i);
    expect(checkbox).toBeChecked();
  });

  it("should render the Checkbox unchecked", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole(/checkbox/i);
    expect(checkbox).not.toBeChecked();
  });
});
