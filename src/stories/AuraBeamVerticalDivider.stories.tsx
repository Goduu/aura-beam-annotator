import type { Meta, StoryObj } from '@storybook/react';
import { AuraBeamVerticalDivider } from '../AuraBeamVerticalDivider';
import { AuraBeamAnnotatorContainer } from '../AuraBeamAnnotatorContainer';
import React from 'react';

const meta = {
  title: 'AuraBeamVerticalDivider',
  component: AuraBeamVerticalDivider,
  parameters: {
    layout: 'centered',
  },
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
    <AuraBeamAnnotatorContainer >
      <AuraBeamVerticalDivider {...args} />
    </AuraBeamAnnotatorContainer>
  ),
};

export const AuraBeamVerticalDividerRightToLeft: Story = {
  args: {
    direction: "r-to-l",
    color: "teal",
  },

  render: (args) => (
    <AuraBeamAnnotatorContainer >
      <AuraBeamVerticalDivider {...args} />
    </AuraBeamAnnotatorContainer>
  ),
};