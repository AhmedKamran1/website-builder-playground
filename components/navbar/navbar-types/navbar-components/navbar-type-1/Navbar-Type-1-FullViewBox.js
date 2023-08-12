import React from "react";

import { StyledLink } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { FullViewBox } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-1-styles";
import { StyledButton } from "@/styles/pre-defined-components/button/button";

const NavbarFullViewBox1 = ({ links, navLinkStyles }) => {
  return (
    <FullViewBox>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <StyledLink href={link?.redirectLink}>
            <StyledButton sx={{ my: 2 }} {...navLinkStyles}>
              {link.innerText}
            </StyledButton>
          </StyledLink>
        </React.Fragment>
      ))}
    </FullViewBox>
  );
};

export default NavbarFullViewBox1;
