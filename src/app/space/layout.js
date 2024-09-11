import React from "react";
import SpaceNav from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <SpaceNav />
      {children}
    </div>
  );
}
