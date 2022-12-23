import type { AppProps } from "next/app";
import { fontsImport } from "@ace-ex/react";
import { globalStyles } from "../styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  fontsImport();
  globalStyles();

  return <Component {...pageProps} />;
}
