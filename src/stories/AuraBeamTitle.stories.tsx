import type { Meta, StoryObj } from '@storybook/react';
import { AuraBeam } from '../AuraBeam';
import React from 'react';
import { AuraBeamAnnotator } from '../AuraBeamAnnotator';
import { AuraBeamVerticalDivider } from '../AuraBeamVerticalDivider';
import { AuraBeamTitle } from '../AuraBeamTitle';
import { AuraBeamBody } from '../AuraBeamBody';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'AuraBeamTitle',
  component: AuraBeamTitle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AuraBeamTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AuraBeamTitlePrimaryRight: Story = {
  args: {
    title: "Aura Beam Title Primary Right",
    type: "primary",
    positioning: "right",
    color: "teal",
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamAnnotator color={args.color} positioning={args.positioning}>
        <AuraBeamTitle {...args} />
      </AuraBeamAnnotator>
    </AuraBeam>
  ),
};

export const AuraBeamTitlePrimaryLeft: Story = {
  args: {
    title: "Aura Beam Title Primary Left ",
    type: "primary",
    positioning: "left",
    color: "teal",
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamAnnotator color={args.color} positioning={args.positioning}>
        <AuraBeamTitle {...args} />
      </AuraBeamAnnotator>
    </AuraBeam>
  ),
};

export const AuraBeamTitleSecondaryRight: Story = {
  args: {
    title: "Aura Beam Title Secondary Right",
    type: "secondary",
    positioning: "right",
    color: "teal",
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamAnnotator color={args.color} positioning={args.positioning}>
        <AuraBeamTitle {...args} />
      </AuraBeamAnnotator>
    </AuraBeam>
  ),
};

export const AuraBeamTitleSecondaryLeft: Story = {
  args: {
    title: "Aura Beam Title Secondary Left",
    type: "secondary",
    positioning: "left",
    color: "teal",
  },

  render: (args) => (
    <AuraBeam >
      <AuraBeamAnnotator color={args.color} positioning={args.positioning}>
        <AuraBeamTitle {...args} />
      </AuraBeamAnnotator>
    </AuraBeam>
  ),
};
