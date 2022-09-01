import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Header />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
