import { render, screen } from "@testing-library/react";

import { Heading } from "./Heading";

describe("Heading component", () => {
  it("should render the Heading", () => {
    render(<Heading>Lorem ipsum dolor</Heading>);

    const heading = screen.getByText(/Lorem ipsum dolor/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render the Heading with custom tag", () => {
    render(<Heading as="h1">H1 heading</Heading>);

    const heading = screen.getByText(/H1 heading/i);
    expect(heading).toContainHTML("h1");
  });
});
