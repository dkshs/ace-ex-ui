import { Box, Text } from "@ace-ex/react";
import { space } from "@ace-ex/tokens";

interface SpacingProps {
  spaceName: keyof typeof space;
}

export const Spacing = ({ spaceName }: SpacingProps) => {
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
          size: space[spaceName],
          bc: "$blue500",
          mr: "$4",
        }}
      />
      <Box css={{ display: "flex", alignItems: "center", gap: "$4" }}>
        <Text>{spaceName}</Text>
        <Text size="sm" css={{ opacity: 0.8 }}>
          {space[spaceName]}
        </Text>
      </Box>
    </Box>
  );
};
