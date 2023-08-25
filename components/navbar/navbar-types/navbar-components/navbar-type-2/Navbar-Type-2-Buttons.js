import React from "react";


import { TabItem } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";

import { Tabs } from "@mui/material";
import { StyledButton } from "@/styles/pre-defined-components/common-styled-components/common-components";

const NavbarButtons2 = ({
  tabValue,
  navLinkStyles,
  handleTabChange,
  links,
}) => {
  return (
    <>
      {links.map((link, index) => (
        <StyledButton key={index} {...navLinkStyles} sx={{ ml: 2 }}>
          {link.innerText}
        </StyledButton>
      ))}
    </>
  );
};

export default NavbarButtons2;
