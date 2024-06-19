import type { Meta, StoryObj } from '@storybook/react';
import ServiceRow from '../src/components/service-row';

// Modify the meta object to use the new Meta type
const meta: Meta<typeof ServiceRow> = {
  title: 'Components/ServiceRow',
  component: ServiceRow
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    heading1: "Service 1",
    subheading1: "Lorem ipsum solor dut amet",
    heading2: "Service 2",
    subheading2: "Lorem ipsum solor dut amet",
    heading3: "Service 3",
    subheading3: "Lorem ipsum solor dut amet"
  },
};