import React from "react";

import { NextPage } from "next";
import { AppProps } from "next/app";

const App: NextPage<ApProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
