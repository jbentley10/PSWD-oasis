import type { Meta, StoryObj } from '@storybook/react';
import Hero from '../src/components/hero';

// Modify the meta object to use the new Meta type
const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    heading: "Example Heading",
    subheading: "lorem ipsum solor dut amet. Codipiscing elit.",
    buttonLink: "/",
    buttonText: "Click me!"
  },
};