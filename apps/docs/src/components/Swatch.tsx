import { Box, Text } from "@ace-ex/react";
import { colors } from "@ace-ex/tokens";

interface SwatchProps {
  colorName: keyof typeof colors;
}

export const Swatch = ({ colorName }: SwatchProps) => {
  return (
    <Box css={{ display: "inline-block", mr: "$3", mb: "$3" }}>
      <Box
        css={{
          size: "$24",
          br: "$md",
          bc: colors[colorName],
          border: "1px solid $gray600",
        }}
      />
      <Box
        css={{
          "& *": { color: "$gray100" },
          display: "flex",
          justifyContent: "center",
          py: "$2",
        }}
      >
        <Text>{colorName}</Text>
      </Box>
    </Box>
  );
};
