import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Tests for Hero Component", () => {
  it("should render the Hero component with children and an image", () => {
    const image = "https://example.com/image.jpg";

    const { getByTestId } = render(
      <Hero image={image}>
        <p>Hero Component</p>
      </Hero>,
    );

    expect(screen.getByText("Hero Component")).toBeTruthy();
    expect(getByTestId("hero")).toHaveStyle({
      backgroundImage: image,
      backgroundBlendMode: "overlay",
    });
  });
});
