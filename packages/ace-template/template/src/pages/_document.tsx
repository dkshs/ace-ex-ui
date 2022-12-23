import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@ace-ex/react";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <link rel="icon" type="image/svg" href="/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
