import React from "react";
import Header from "../layouts/Header";
import LenisProvider from "../LenisProvider/LenisProvider";
import Footer from "../layouts/Footer";

function Layout({ children }) {
  //  useLenis();
  return (
    <>
      <Header />
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
      {/* <Footer />  */}
    </>
  );
}

export default Layout;
