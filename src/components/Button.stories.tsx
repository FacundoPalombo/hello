import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    href: "#",
    target: "",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          viewBox="0 0 120 120"
          version="1.1"
          width="16px"
          height="16px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="50" fill="red" />
        </svg>
        Hola
      </>
    ),
  },
};
