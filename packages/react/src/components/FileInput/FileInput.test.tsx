import { render, screen } from "@testing-library/react";

import { FileInput } from "./FileInput";

describe("FileInput component", () => {
  it("should render the FileInput", () => {
    render(<FileInput content="Escolha um arquivo" />);

    const label = screen.getByText(/Escolha um arquivo/i);
    expect(label).toBeInTheDocument();
    expect(label).toContainHTML("input");
  });

  it("should render the FileInput disabled", () => {
    render(<FileInput disabled data-testid="testId" />);

    const input = screen.getByTestId("testId");
    expect(input).toContainHTML("input");
    expect(input).toBeDisabled();
  });
});
