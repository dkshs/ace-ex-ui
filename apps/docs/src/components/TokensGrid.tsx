import { Box } from "@ace-ex/react";

interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
  hasMediaQuery?: boolean;
}

export function TokensGrid({
  tokens,
  hasRemValue = false,
  hasMediaQuery = false,
}: TokensGridProps) {
  return (
    <Box
      as="table"
      css={{
        width: "100%",
        "& *": { color: "$gray100" },
        borderCollapse: "collapse",
      }}
      className="tokens-grid"
    >
      <Box
        as="thead"
        css={{
          "& th": {
            p: "$3 $4",
            textAlign: "left",
          },
        }}
      >
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </Box>

      <Box
        as="tbody"
        css={{
          "& td": { p: "$3 $4" },
          "& td:first-child": { btlr: "$md", bblr: "$md" },
          "& td:last-child": { btrr: "$md", bbrr: "$md" },
          "& tr:nth-child(odd) td": { bc: "$gray800" },
        }}
      >
        {Object.entries(tokens).map(([key, value]) => {
          const valueRem = value.endsWith("rem")
            ? Number(value.replace("rem", "")) * 16
            : value.replace("px", "");

          return (
            <tr key={key}>
              <td>{hasMediaQuery ? `@${key}` : `$${key}`}</td>
              <td>{value}</td>
              {hasRemValue && <td>{valueRem}px</td>}
            </tr>
          );
        })}
      </Box>
    </Box>
  );
}
