import React from 'react';
import type { Preview } from "@storybook/react";

import '../src/index.css';
import './calendar.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
  },

  decorators: [
    (Story) => <Story />
  ],

  tags: ["autodocs"]
};

export default preview;