import { render, screen } from "@testing-library/react";

import { Image } from "./Image";

describe("Image component", () => {
  it("should render a image", () => {
    render(<Image alt="test" src="" />);

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

  it("should render a image with src attribute", () => {
    render(<Image alt="test" src="https://github.com/ShadowsS01.png" />);

    const imageSrc = screen.getByRole("img").getAttribute("src");
    expect(imageSrc).toBe("https://github.com/ShadowsS01.png");
  });
});
