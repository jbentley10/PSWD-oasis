import type { Meta as MetaType, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from './Header';

// Define a new type that extends the Meta type from @storybook/react
type Meta<T> = MetaType<T> & {
  argTypes: {
    backgroundColor: { control: 'color' };
  };
};

// Modify the meta object to use the new Meta type
const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
