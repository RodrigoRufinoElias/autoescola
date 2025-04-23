import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import GlobalStyle from "./GlobalStyle";

const meta = {
  title: "Styles/GlobalStyle",
  component: GlobalStyle,
} satisfies Meta<typeof GlobalStyle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const headings: Story = {
  render: () => (
    <>
      <GlobalStyle />
      <div>
        <h1>Título 1</h1>
        <h2>Título 2</h2>
        <h3>Título 3</h3>
        <h4>Título 4</h4>
        <h5>Título 5</h5>
        <h6>Título 6</h6>
      </div>
    </>
  ),
};

export const paragraph: Story = {
  render: () => (
    <>
      <GlobalStyle />
      <div>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p>
          <strong>The quick brown fox jumps over the lazy dog.</strong>
        </p>
        <p>
          <em>The quick brown fox jumps over the lazy dog.</em>
        </p>
        <p>
          <u>The quick brown fox jumps over the lazy dog.</u>
        </p>
        <p>
          <s>The quick brown fox jumps over the lazy dog.</s>
        </p>
      </div>
    </>
  ),
};
