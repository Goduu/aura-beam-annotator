import type { Preview } from "@storybook/react";
import '../styles/tailwind.css';
import React from 'react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
  (Story, context) => {
    return (
      <div className="bg-white text-black antialiased dark:bg-slate-950 dark:text-white">
        <Story {...context} />
      </div>
    )
  },
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
