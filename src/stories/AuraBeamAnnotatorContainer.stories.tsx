import type { Meta, StoryObj } from '@storybook/react';
import { AuraBeamAnnotatorContainer } from '../AuraBeamAnnotatorContainer';
import React from 'react';
import { AuraBeamAnnotator } from '../AuraBeamAnnotator';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'AuraBeamAnnotatorContainer',
  component: AuraBeamAnnotatorContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AuraBeamAnnotatorContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OneItem: Story = {
  render: () => (
    <AuraBeamAnnotatorContainer >
      <AuraBeamAnnotator title="Paha" color="teal" positioning="right">
        Ipsum lorem text here
      </AuraBeamAnnotator>
    </AuraBeamAnnotatorContainer>
  ),
};

