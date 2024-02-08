import type { Meta, StoryObj } from '@storybook/react';
import { AuraBeamAnnotatorContainer } from '../AuraBeamAnnotatorContainer';
import React from 'react';
import { AuraBeamAnnotator } from '../AuraBeamAnnotator';
import { AuraBeamVerticalDivider } from '../AuraBeamVerticalDivider';


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
export const ContainerRight: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <AuraBeamAnnotatorContainer >
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="right">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
    </AuraBeamAnnotatorContainer>
  ),
};

export const ContainerLeft: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <AuraBeamAnnotatorContainer >
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="left">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
    </AuraBeamAnnotatorContainer>
  ),
};

export const ContainerTwoLeft: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <AuraBeamAnnotatorContainer >
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="left">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="left">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
    </AuraBeamAnnotatorContainer>
  ),
};

export const ContainerLeftRight: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <AuraBeamAnnotatorContainer >
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="left">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="right">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
    </AuraBeamAnnotatorContainer>
  ),
};

export const ContainerWithDividerLeftRight: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <AuraBeamAnnotatorContainer >
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="left">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
      <AuraBeamVerticalDivider direction='l-to-r' color='teal' />
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="right">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
    </AuraBeamAnnotatorContainer>
  ),
};


export const ContainerWithDividerRightLeft: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <AuraBeamAnnotatorContainer >
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="right">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
      <AuraBeamVerticalDivider direction='r-to-l' color='teal' />
      <AuraBeamAnnotator title="WithContainer" color="teal" positioning="left">
        AuraBeamAnnotator wrapped by a AuraBeamAnnotatorContainer
      </AuraBeamAnnotator>
    </AuraBeamAnnotatorContainer>
  ),
};

export const FullExample: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <AuraBeamAnnotatorContainer >
      <AuraBeamAnnotator title="Ipsum lorem tilet" color="teal" positioning="right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.
      </AuraBeamAnnotator>
      <AuraBeamAnnotator title="Excepteur lorem" color="teal" positioning="right">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </AuraBeamAnnotator>
      <AuraBeamVerticalDivider direction='r-to-l' color='teal' />
      <AuraBeamAnnotator title="Consectetur neman" color="teal" positioning="left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
      </AuraBeamAnnotator>
      <AuraBeamAnnotator title="Cupidatat proident" color="teal" positioning="left">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </AuraBeamAnnotator>
      <AuraBeamVerticalDivider direction='l-to-r' color='teal' />
      <AuraBeamAnnotator title="Incididunt elit" color="teal" positioning="right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </AuraBeamAnnotator>
    </AuraBeamAnnotatorContainer>
  ),
};


