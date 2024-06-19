import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/ui/button';

// Modify the meta object to use the new Meta type
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default'
  },
};