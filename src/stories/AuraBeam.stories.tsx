import type { Meta, StoryObj } from '@storybook/react';
import { AuraBeam } from '../AuraBeam';
import React from 'react';
import { AuraBeamAnnotator } from '../AuraBeamAnnotator';
import { AuraBeamVerticalDivider } from '../AuraBeamVerticalDivider';
import { AuraBeamTitle } from '../AuraBeamTitle';
import { AuraBeamBody } from '../AuraBeamBody';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'AuraBeam',
  component: AuraBeam,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AuraBeam>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullExample: Story = {
  args: {
    children: null
  },

  render: (args) => (
    <>
      <AuraBeam >
        <AuraBeamAnnotator color="teal" positioning="right">
          <AuraBeamTitle title="Primary Title Right" />
          <AuraBeamBody>
            Sed mi tellus, sagittis vel cursus vitae, tincidunt at turpis.
          </AuraBeamBody>
          <AuraBeamTitle title="Secondary Title Right" type='secondary' />
          <AuraBeamBody>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </AuraBeamBody>
        </AuraBeamAnnotator>
        <AuraBeamAnnotator color="teal" positioning="left">
          <AuraBeamTitle title="Primary Title left" />
          <AuraBeamBody>
            Vivamus orci dolor, porttitor sit amet neque vel, ornare porttitor nisi.
          </AuraBeamBody>
          <AuraBeamTitle title="Secondary Title Left" type='secondary' />
          <AuraBeamBody>
            Praesent at metus ac nisl mattis mattis quis nec ligula.
          </AuraBeamBody>
        </AuraBeamAnnotator>
        <AuraBeamAnnotator color="teal" positioning="right">
          <AuraBeamTitle title="Title Right" />
          <AuraBeamBody>
            Two AuraBeamAnnotator wrapped by a AuraBeam and divided by a AuraBeamVerticalDivider
          </AuraBeamBody>
        </AuraBeamAnnotator>
        <AuraBeamVerticalDivider direction='r-to-l' color='teal' />
        <AuraBeamAnnotator color="teal" positioning="left">
          <AuraBeamTitle title="Title Left" />
          <AuraBeamBody>
            Quisque fringilla rutrum augue, vitae dignissim tortor aliquam maximus.
          </AuraBeamBody>
          <AuraBeamTitle title="Secondary Title" type='secondary' />
          <AuraBeamBody>
            Donec in tempus neque.
          </AuraBeamBody>
          <AuraBeamTitle title="Secondary Title" type='secondary' />
          <AuraBeamBody>
            Quisque fringilla rutrum augue, vitae dignissim tortor aliquam maximus.
          </AuraBeamBody>
          <AuraBeamTitle title="Another Title Left" type='primary' />
          <AuraBeamBody>
            Vivamus orci dolor, porttitor sit amet neque vel, ornare porttitor nisi.
          </AuraBeamBody>
        </AuraBeamAnnotator>

      </AuraBeam>
      <AuraBeam>
        <AuraBeamAnnotator color="teal" positioning="left">
          <AuraBeamTitle title="Title Left" />
          <AuraBeamBody>
            Phasellus lobortis risus ut turpis ornare, at varius magna semper.
          </AuraBeamBody>
          <AuraBeamTitle title="Secondary Title" type='secondary' />
          <AuraBeamBody>
            Cras consequat eros vel felis lobortis, et pretium ipsum commodo.
          </AuraBeamBody>
          <AuraBeamTitle title="Secondary Title" type='secondary' />
          <AuraBeamBody>
            Quisque fringilla rutrum augue, vitae dignissim tortor aliquam maximus
          </AuraBeamBody>
          <AuraBeamTitle title="Another Title Left" type='primary' />
          <AuraBeamBody>
            Mauris vitae mollis massa, in efficitur magna. Maecenas tincidunt odio sapien, quis rutrum nisl venenatis non.
          </AuraBeamBody>
        </AuraBeamAnnotator>
        <AuraBeamVerticalDivider direction='l-to-r' color='teal' />
        <AuraBeamAnnotator color="teal" positioning="right">
          <AuraBeamTitle title="Title right" />
          <AuraBeamBody>
            Phasellus ut risus sit amet sapien faucibus congue.
          </AuraBeamBody>
          <AuraBeamTitle title="Secondary title" type='secondary' />
          <AuraBeamBody>
            Etiam quam nunc, porta quis magna sed, feugiat vehicula felis.
          </AuraBeamBody>
        </AuraBeamAnnotator>
        <AuraBeamAnnotator color="teal" positioning="right">
          <AuraBeamTitle title="Title Right" />
          <AuraBeamBody>
            Suspendisse vitae sapien finibus, tempus lorem sit amet, semper mauris.
          </AuraBeamBody>
        </AuraBeamAnnotator>
      </AuraBeam>

      <AuraBeam>
        <AuraBeamAnnotator color="teal" positioning="right">
          <AuraBeamTitle title="Changing color" />
          <AuraBeamBody>
            Two AuraBeamAnnotator wrapped by a AuraBeam and divided by a AuraBeamVerticalDivider
          </AuraBeamBody>
        </AuraBeamAnnotator>
        <AuraBeamVerticalDivider direction='r-to-l' color='cyan' />
        <AuraBeamAnnotator color="cyan" positioning="left">
          <AuraBeamTitle title="Title Left" />
          <AuraBeamBody>
            Quisque fringilla rutrum augue, vitae dignissim tortor aliquam maximus.
          </AuraBeamBody>

        </AuraBeamAnnotator>
      </AuraBeam>
    </>
  ),
};
