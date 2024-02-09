import type { Meta, StoryObj } from '@storybook/react';
import { AuraBeamVerticalDivider } from '../AuraBeamVerticalDivider';
import { AuraBeam } from '../AuraBeam';
import React from 'react';

const meta = {
  title: 'AuraBeamVerticalDivider',
  component: AuraBeamVerticalDivider,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof AuraBeamVerticalDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AuraBeamVerticalDividerLeftToRight: Story = {
  args: {
    direction: "l-to-r",
    color: "teal",
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamVerticalDivider {...args} />
    </AuraBeam>
  ),
};

export const AuraBeamVerticalDividerRightToLeft: Story = {
  args: {
    direction: "r-to-l",
    color: "teal",
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamVerticalDivider {...args} />
    </AuraBeam>
  ),
};

export const AuraBeamVerticalDividers: Story = {
  args: {
    direction: "r-to-l",
    color: "teal",
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamVerticalDivider {...args} />
      <AuraBeamVerticalDivider {...args} direction='l-to-r' />
    </AuraBeam>
  ),
};