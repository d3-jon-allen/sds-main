import type { Meta, StoryObj } from "@storybook/react";
import Login from "../../examples/Login";

const meta: Meta<typeof Login> = {
  component: Login,
  title: "Examples/Login",
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {
  args: {},
};
