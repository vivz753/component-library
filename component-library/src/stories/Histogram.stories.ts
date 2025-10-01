import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Histogram } from "../components/Histogram";
import { d1, d2, d3 } from "../components/Histogram/sampleData";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Histogram",
  component: Histogram,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Histogram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultipleDatasets: Story = {
  args: {
    width: 700,
    height: 400,
    dataset: [d1, d2, d3],
  },
};

export const LargeDomain: Story = {
  args: {
    width: 700,
    height: 400,
    domain: [0, 200],
    dataset: [d2],
  },
};
export const LessBins: Story = {
  args: {
    width: 700,
    height: 400,
    domain: [0, 200],
    totalBins: 10,
    dataset: [d2],
  },
};
export const SmallDomain: Story = {
  args: {
    width: 700,
    height: 400,
    domain: [20, 30],
    totalBins: 35,
    dataset: [d2],
  },
};
