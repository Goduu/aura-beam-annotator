import type { Meta, StoryObj } from '@storybook/react';
import { AuraBeam } from '../AuraBeam';
import React from 'react';
import { AuraBeamAnnotator } from '../AuraBeamAnnotator';
import { AuraBeamBody } from '../AuraBeamBody';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'AuraBeamAnnotator',
  component: AuraBeamAnnotator,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AuraBeamAnnotator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AuraBeamAnnotatorRight: Story = {
  args: {
    color: "teal",
    positioning: "right",
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamAnnotator {...args}>
        <AuraBeamBody>
          AuraBeamBody Right
        </AuraBeamBody>
      </AuraBeamAnnotator>
    </AuraBeam>
  ),
};

export const AuraBeamAnnotatorLeft: Story = {
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
