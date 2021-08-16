import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Medicine Data</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Medicine Data Set" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
