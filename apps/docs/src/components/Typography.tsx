import { Typeset } from "@storybook/addon-docs";
import { fontSizes as fontsSz, fonts } from "@ace-ex/tokens";
import { Text, Box } from "@ace-ex/react";

const fontSizes: any[] = [];

Object.entries(fontsSz).map(([key, value]) => {
  let valueInPixels;
  if (value.endsWith("rem")) {
    valueInPixels = Number(value.replace("rem", "")) * 16;
  }
  return fontSizes.push(valueInPixels);
});

const SampleText = "Lorem ipsum dolor";

interface TypographyProps {
  fontName: keyof typeof fonts;
}

export const Typography = ({ fontName }: TypographyProps) => {
  return (
    <Box css={{ "& *": { color: "$gray100" } }}>
      <Text css={{ display: "inline-flex" }}>
        <Text css={{ fontWeight: "$bold" }}>Weight</Text>: 400(regular)
      </Text>
      <Typeset
        sampleText={SampleText}
        fontSizes={fontSizes}
        fontWeight={400}
        fontFamily={fonts[fontName]}
      />
      <Text css={{ display: "inline-flex" }}>
        <Text css={{ fontWeight: "$bold" }}>Weight</Text>: 500(medium)
      </Text>
      <Typeset
        sampleText={SampleText}
        fontSizes={fontSizes}
        fontWeight={500}
        fontFamily={fonts[fontName]}
      />
      <Text css={{ display: "inline-flex" }}>
        <Text css={{ fontWeight: "$bold" }}>Weight</Text>: 600(semi-bold)
      </Text>
      <Typeset
        sampleText={SampleText}
        fontSizes={fontSizes}
        fontWeight={600}
        fontFamily={fonts[fontName]}
      />
      <Text css={{ display: "inline-flex" }}>
        <Text css={{ fontWeight: "$bold" }}>Weight</Text>: 700(bold)
      </Text>
      <Typeset
        sampleText={SampleText}
        fontSizes={fontSizes}
        fontWeight={700}
        fontFamily={fonts[fontName]}
      />
    </Box>
  );
};
