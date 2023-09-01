import React from "react";

import { StyledButton } from "@/styles/pre-defined-components/common-styled-components/common-components";

const NavbarButtons2 = ({
  navLinkStyles,
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
