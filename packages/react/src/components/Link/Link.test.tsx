import { render, screen } from "@testing-library/react";

import { Link } from "./Link";

describe("Link component", () => {
  it("should render the Link", () => {
    render(<Link>Link to</Link>);

    const link = screen.getByText(/Link to/i);
    expect(link).toBeInTheDocument();
  });

  it("should render the Link with a test title", () => {
    render(<Link title="link test">A test text</Link>);

    expect(screen.getByTitle("link test")).toBeInTheDocument();
  });
});
