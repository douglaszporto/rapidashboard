import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [//"@storybook/addon-onboarding",
  //"@storybook/addon-links",
  "storybook-addon-remix-react-router", //"@chromatic-com/storybook",
  //"@storybook/addon-interactions",
  "@storybook/addon-essentials", "@chromatic-com/storybook"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: false,
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
