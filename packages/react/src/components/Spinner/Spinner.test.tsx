import { render, screen } from "@testing-library/react";

import { Spinner } from "./Spinner";

describe("Spinner component", () => {
  it("should render the Spinner", () => {
    render(<Spinner data-testid="spinner-test" />);

    const spinner = screen.getByTestId("spinner-test");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toContainHTML("svg");
  });

  it("should render the Spinner with a test text", () => {
    render(<Spinner text="loading" />);

    const spinner = screen.getByText(/loading/i);
    expect(spinner).toBeInTheDocument();
  });
});
