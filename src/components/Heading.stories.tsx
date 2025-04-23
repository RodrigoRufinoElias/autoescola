import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Heading from "../components/Headings";

const meta = {
  title: "Components/Heading",
  decorators: [withKnobs],
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const usage: Story = {
  render: () => (
    <>
      <Heading>
        <h1>{text("title 1", "Título H1")}</h1>
      </Heading>
      <Heading>
        <h2>{text("title 2", "Título H2")}</h2>
      </Heading>
      <Heading>
        <h3>{text("title 3", "Título H3")}</h3>
      </Heading>
      <Heading>
        <h4>{text("title 4", "Título H4")}</h4>
      </Heading>
      <Heading>
        <h5>{text("title 5", "Título H5")}</h5>
      </Heading>
      <Heading>
        <h6>{text("title 6", "Título H6")}</h6>
      </Heading>
    </>
  ),
};
