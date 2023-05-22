/* pages/_app.tsx
\ */

import React from "react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import type { ReactElement } from "react";
import Header from "../components/Header/Header";
import "./GlobalStyles.css";

type ComponentType = {
  (props: { ean: number; title: string }): ReactElement;
};

//adding a ProductList function here later to deal with products coming from both database and API.

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: ComponentType }) {
  return (
    <SWRConfig>
      <Header />
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
