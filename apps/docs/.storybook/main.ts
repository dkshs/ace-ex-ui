import path from "path";
import type { StorybookConfig } from "@storybook/react/types";

const config: StorybookConfig = {
  staticDirs: ["./static"],
  stories: [
    "../src/pages/Introduction/welcome.stories.mdx",
    "../src/pages/Introduction/*.stories.mdx",
    "../src/pages/Features/theme.stories.mdx",
    "../src/pages/Features/*.stories.mdx",
    "../src/stories/**/*.stories.tsx",
    "../src/pages/Packages/react.stories.mdx",
    "../src/pages/Packages/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
};
export default config;
