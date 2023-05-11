import React, { useState } from "react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import type { ReactElement } from "react";

type ComponentType = {
  (props: any): ReactElement;
};

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: ComponentType }) {
  const [searchTerm, setSearchTerm] = useState("");

  //   const handleSearch = async (searchTerm: string) => {
  //     setSearchTerm(searchTerm);
  //   };

  return (
    <SWRConfig>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
