import React from "react";
import HamburgerMenu from "./hamburger-menu";
import Header from "./header";
import { links } from "@/lib/data";

export default function Navbar() {
  return (
    <nav>
      <HamburgerMenu links={links} />
      <Header links={links} />
    </nav>
  );
}
