import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Hero from "../components/Hero";
import BgRoadImage from "../stories/assets/road.jpg";

const meta = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const usage: Story = {
  args: {
    image: BgRoadImage,
    children: <p>Hero content goes here.</p>,
  },
};

export const withList: Story = {
  args: {
    image: BgRoadImage,
    children: (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    ),
  },
};

export const realComponent: Story = {
  args: {
    image: BgRoadImage,
    children: (
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
    ),
  },
};
