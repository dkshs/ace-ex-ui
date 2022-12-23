import { Box, Heading, Link, Text } from "@ace-ex/react";
import { Meta } from "../components/Meta";
import { Logo } from "../components/Logo";

const title = "Bem vindo ao AceEx Next.js";

export default function Home() {
  return (
    <>
      <Meta title={title} path="/" />
      <Box
        as="main"
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "450px",
          m: "0 auto $6",
        }}
      >
        <Logo />
        <Box css={{ py: "$4", px: "$6", textAlign: "center" }}>
          <Heading as="h1">{title}</Heading>
          <Box css={{ mt: "$2" }}>
            <Text>
              Este é um projeto inicial baseado em Next.js com a{" "}
              <Link
                href="https://ace-ex-ui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir página inicial da AceEx UI em uma nova tab."
                variant="blueShadow"
                css={{ px: "$1" }}
              >
                AceEx UI
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
