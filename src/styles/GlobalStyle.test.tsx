import { render } from "@testing-library/react";
import GlobalStyle from "./GlobalStyle";

describe("Global Style", () => {
  it("should match snapshot", () => {
    render(<GlobalStyle />);
    expect(document.head).toMatchSnapshot();
  });
});
