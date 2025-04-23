import React from "react";
import GlobalStyle from "../src/styles/GlobalStyle";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  viewport: {
    viewports: {
      extraSmall: {
        name: "Portrait Mobile (default)",
        styles: {
          width: "360px",
          height: "640px",
        },
      },
      small: {
        name: "Landscape Mobile (sm)",
        styles: {
          width: "640px",
          height: "360px",
        },
      },
      medium: {
        name: "Tablet Portrait (md)",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      large: {
        name: "Desktop (lg)",
        styles: {
          width: "1024px",
          height: "1366px",
        },
      },
      extraLarge: {
        name: "Large Desktop (xl)",
        styles: {
          width: "1280px",
          height: "800px",
        },
      },
    },
  },
};
