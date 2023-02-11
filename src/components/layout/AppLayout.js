import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";

function AppLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default AppLayout;
