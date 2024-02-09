import type { Meta, StoryObj } from '@storybook/react';
import { AuraBeam } from '../AuraBeam';
import React from 'react';
import { AuraBeamAnnotator } from '../AuraBeamAnnotator';
import { AuraBeamVerticalDivider } from '../AuraBeamVerticalDivider';
import { AuraBeamTitle } from '../AuraBeamTitle';
import { AuraBeamBody } from '../AuraBeamBody';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'AuraBeamBody',
  component: AuraBeamBody,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AuraBeamBody>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AuraBeamBodyRight: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamAnnotator color="teal" positioning="right">
        <AuraBeamBody>
          AuraBeamBody Right
        </AuraBeamBody>
      </AuraBeamAnnotator>
    </AuraBeam>
  ),
};

export const AuraBeamBodyLeft: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamAnnotator color="teal" positioning="left">
        <AuraBeamBody>
          AuraBeamBody Right
        </AuraBeamBody>
      </AuraBeamAnnotator>
    </AuraBeam>
  ),
};
