import { Container } from "@/styles/SideBar.styles";
import React from "react";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

const SideBar = () => {
  return (
    <Container>
      <TopBar />
      <BottomBar />
    </Container>
  );
};

export default SideBar;
