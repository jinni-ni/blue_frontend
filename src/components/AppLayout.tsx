import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainPhoto from "./MainPhoto";
import "./AppLayout.scss";

function AppLayout({ children }: { children: any }) {
  return (
    <div>
      <div className="Nav">
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}
export default AppLayout;
