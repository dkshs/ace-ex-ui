import { create } from "@storybook/theming";
import { colors, fonts } from "@ace-ex/tokens";

export const themes = {
  darkTheme: create({
    base: "dark",

    // Brand assets
    brandTitle: "AceEx UI",
    brandUrl: "https://github.com/dkshs/ace-ex-ui/",
    brandImage: "logo-dark.svg",

    // Base colors
    colorPrimary: colors.gray100,
    colorSecondary: colors.blue500,

    // UI
    appBg: colors.black,
    appContentBg: colors.gray900,
    appBorderColor: colors.gray800,
    appBorderRadius: 8,

    // Typography
    fontBase: fonts.inter,
    fontCode: "monospace",

    // Text colors
    textColor: colors.gray100,
    textInverseColor: colors.gray900,
    textMutedColor: colors.gray800,

    // Toolbar default and active colors
    barTextColor: colors.gray200,
    barSelectedColor: colors.blue200,
    barBg: colors.zinc900,

    // Form colors
    inputBg: colors.black,
    inputBorder: colors.gray600,
    inputTextColor: colors.gray300,
    inputBorderRadius: 6,
  }),
  lightTheme: create({
    base: "light",

    // Brand assets
    brandTitle: "AceEx UI",
    brandUrl: "https://github.com/dkshs/ace-ex-ui/",
    brandImage: "logo-light.svg",

    // Base colors
    colorPrimary: colors.blue900,
    colorSecondary: colors.blue600,

    // UI
    appBg: colors.gray50,
    appContentBg: colors.white,
    appBorderColor: colors.gray200,
    appBorderRadius: 8,

    // Typography
    fontBase: fonts.inter,
    fontCode: "monospace",

    // Text colors
    textColor: colors.gray800,
    textInverseColor: colors.gray100,
    textMutedColor: colors.gray200,

    // Toolbar default and active colors
    barTextColor: colors.gray800,
    barSelectedColor: colors.blue500,
    barBg: colors.white,

    // Form colors
    inputBg: colors.gray100,
    inputBorder: colors.gray300,
    inputTextColor: colors.gray700,
    inputBorderRadius: 6,
  }),
};
