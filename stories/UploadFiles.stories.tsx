import { Meta, Story } from '@storybook/react';
import {UploadFiles,UploadFilesProps} from "../src";

const meta: Meta = {
  title: 'Upload files',
  component: UploadFiles,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<UploadFilesProps> = args => <UploadFiles {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
