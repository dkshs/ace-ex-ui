import { addons } from "@storybook/addons";
import { themes } from "./themes";

addons.setConfig({
  theme: themes.darkTheme,
  showPanel: true,
  panelPosition: "bottom",
});
