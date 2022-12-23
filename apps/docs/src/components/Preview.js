import { Canvas } from "@storybook/addon-docs";
import { Box } from "@ace-ex/react";

// eslint-disable-next-line react/prop-types
export const Preview = ({ children, ...props }) => (
  <Canvas {...props}>
    <Box>{children}</Box>
  </Canvas>
);
