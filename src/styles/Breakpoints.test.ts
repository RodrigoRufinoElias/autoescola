import { breakAt, BreakpointSizes } from "./Breakpoints";

test.each([
  [BreakpointSizes.sm, "sm"],
  [BreakpointSizes.md, "md"],
  [BreakpointSizes.lg, "lg"],
  [BreakpointSizes.xl, "xl"],
])("break at %s size", (size) => {
  const result = breakAt(size);
  expect(result).toEqual(`@media (min-width: ${size}px)`);
});
