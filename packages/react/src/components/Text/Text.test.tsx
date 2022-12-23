import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text component", () => {
  it("should render the Text", () => {
    render(<Text>Lorem ipsum dolor</Text>);

    const text = screen.getByText(/Lorem ipsum dolor/i);
    expect(text).toBeInTheDocument();
  });

  it("should render the Text with custom tag", () => {
    render(<Text as="strong">Strong text</Text>);

    const text = screen.getByText(/Strong text/i);
    expect(text).toContainHTML("strong");
  });
});
