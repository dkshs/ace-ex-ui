import type { NextPage } from "next";

import { Box, Heading, Button, Text } from "@ace-ex/react";
import NextLink from "next/link";
import Head from "next/head";
import { Logo } from "../components/Logo";

const title = "Página não encontrada";
const description = "A página solicitada não pode ser encontrada.";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
            <Text>{description}</Text>
          </Box>
          <Box
            css={{
              mt: "$4",
              "& *": { textDecoration: "none", outline: "none" },
            }}
          >
            <Button as={NextLink} href="/" fullWidth>
              Voltar para a Home
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
