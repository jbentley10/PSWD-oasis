import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../src/components/footer';

// Modify the meta object to use the new Meta type
const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};