import React from "react";
import { render } from "@testing-library/react";
import Heading from "./Headings";

describe("Heading Component", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<Heading>Title</Heading>);
    expect(asFragment()).toMatchSnapshot();
  });
});
