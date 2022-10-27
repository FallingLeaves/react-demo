import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { SideProvider } from "./context";

function SidebarApp() {
  return (
    <SideProvider>
      <Home></Home>
      <Modal></Modal>
      <Sidebar></Sidebar>
    </SideProvider>
  )
}

export default SidebarApp