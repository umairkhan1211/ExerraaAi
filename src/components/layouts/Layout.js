import React from "react";
import Header from "../layouts/Header";
import LenisProvider from "../LenisProvider/LenisProvider";

function Layout({ children, activeItem, setActiveItem }) {
  return (
    <>
      <Header activeItem={activeItem} setActiveItem={setActiveItem} />
      <main>
        <LenisProvider>{children}</LenisProvider>
      </main>
   
    </>
  );
}

export default Layout;
