import { globalDecorators } from "./decorator";
import { themes } from "./themes";
import { colors } from "@ace-ex/tokens";
import { fontsImport, globalStyles } from "@ace-ex/react";

fontsImport();
globalStyles();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.darkTheme,
  },
  viewMode: "docs",
  backgrounds: {
    values: [
      { name: "dark", value: colors.gray900 },
      { name: "light", value: colors.gray50 },
    ],
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme for the components",
    defaultValue: "dark",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
      ],
    },
  },
};

export const decorators = globalDecorators;
