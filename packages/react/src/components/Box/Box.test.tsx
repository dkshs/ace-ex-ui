import { render, screen } from "@testing-library/react";

import { Box } from "./Box";

describe("Box component", () => {
  it("should render the Box", () => {
    render(<Box>Box</Box>);
    expect(screen.getByText(/Box/i)).toBeInTheDocument();
  });

  it("should render the Box with custom children", () => {
    render(<Box>Custom children</Box>);
    expect(screen.getByText(/Custom children/i)).toBeInTheDocument();
  });

  it("should render the Box with custom tag", () => {
    render(<Box as="section">Custom tag</Box>);

    const box = screen.getByText(/Custom tag/i);
    expect(box).toContainHTML("section");
  });
});
