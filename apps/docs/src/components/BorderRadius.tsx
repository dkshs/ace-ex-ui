import { Box, Text } from "@ace-ex/react";
import { radii } from "@ace-ex/tokens";

interface BorderRadiusProps {
  borderRadius: keyof typeof radii;
}

export const BorderRadius = ({ borderRadius }: BorderRadiusProps) => {
  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        mb: "$4",
        "& *": { color: "$gray100" },
      }}
    >
      <Box
        css={{
          size: "$8",
          br: radii[borderRadius],
          bc: "$blue500",
          mr: "$4",
        }}
      />
      <Box css={{ display: "flex", alignItems: "center", gap: "$4" }}>
        <Text>{borderRadius}</Text>
        <Text size="sm" css={{ opacity: 0.8 }}>
          {radii[borderRadius]}
        </Text>
      </Box>
    </Box>
  );
};
