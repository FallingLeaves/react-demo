import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { SubmenuProvider } from "./context";

function SubmenuApp() {
  return (
    <SubmenuProvider>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Hero></Hero>
      <Submenu></Submenu>
    </SubmenuProvider>
  )
}

export default SubmenuApp