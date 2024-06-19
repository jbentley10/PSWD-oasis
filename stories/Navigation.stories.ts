import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '../src/components/navigation';

// Modify the meta object to use the new Meta type
const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};