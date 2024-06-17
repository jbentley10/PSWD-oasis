import type { Meta as MetaType, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Footer from '../src/components/footer';

// Define a new type that extends the Meta type from @storybook/react
type Meta<T> = MetaType<T> & {
  argTypes: {
    backgroundColor: { control: 'color' };
  };
};

// Modify the meta object to use the new Meta type
const meta: Meta<typeof Footer> = {
  title: 'Example/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};