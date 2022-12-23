import React from "react";
import { DecoratorFn } from "@storybook/react";

import { darkTheme } from "@ace-ex/react";

export const withTheme: DecoratorFn = (
  StoryFn,
  { globals: { theme = "dark" }, parameters },
) => {
  function handleTheme() {
    const html = document.querySelector("html");

    const classTheme = theme === "light" ? "light" : darkTheme.className;
    html?.setAttribute("class", classTheme);
    html?.setAttribute("style", `color-scheme: ${theme}`);
  }
  handleTheme();

  return <StoryFn />;
};

export const globalDecorators = [withTheme];
