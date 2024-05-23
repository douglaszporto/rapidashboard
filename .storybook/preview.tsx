import React from 'react';
import type { Preview } from "@storybook/react";

import '../src/index.css';
import './calendar.css';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources: {
    en: {
      translation: {
        "paginator": {
          "label": "$1 of $2",
        }
      }
    }
  }
});

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => <I18nextProvider i18n={i18next}>
      <Story />
    </I18nextProvider>
  ],
};

export default preview;