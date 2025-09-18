import React from 'react';
import Datepicker from './Datepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
};

const Template = (args) => <Datepicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here if needed
};
