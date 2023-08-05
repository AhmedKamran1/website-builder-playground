import React, { useState } from "react";

import { KeyboardArrowDown } from "@mui/icons-material";

import { StyledLink } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { FullViewBox } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-1-styles";
import { StyledButton } from "@/styles/pre-defined-components/button/button";

import NavbarMenu from "../common-components/NavbarMenu";

const NavbarFullViewBox1 = ({ links, navLinkStyles }) => {
  const [firstLinkDropDown, setFirstLinkDropDown] = useState(null);
  const [secondLinkDropDown, setSecondLinkDropDown] = useState(null);
  const [thirdLinkDropDown, setThirdLinkDropDown] = useState(null);
  const [fourthLinkDropDown, setFourthLinkDropDown] = useState(null);

  const getSetLinkDropDown = (index) => {
    switch (index) {
      case 0:
        return setFirstLinkDropDown;
      case 1:
        return setSecondLinkDropDown;
      case 2:
        return setThirdLinkDropDown;
      case 3:
        return setFourthLinkDropDown;
    }
  };

  const getLinkDropDown = (index) => {
    switch (index) {
      case 0:
        return firstLinkDropDown;
      case 1:
        return secondLinkDropDown;
      case 2:
        return thirdLinkDropDown;
      case 3:
        return fourthLinkDropDown;
    }
  };

  const handleOpenNavMenu = (event, index) => {
    const setLinkDropDown = getSetLinkDropDown(index);
    setLinkDropDown(event.currentTarget);
  };

  const handleCloseNavMenu = (event, index) => {
    const setLinkDropDown = getSetLinkDropDown(index);
    setLinkDropDown(null);
  };
  return (
    <FullViewBox>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <StyledLink href={link?.redirectLink}>
            <StyledButton
              sx={{ my: 2 }}
              endIcon={link.showDropDown && <KeyboardArrowDown />}
              onClick={(event) =>
                link.showDropDown && handleOpenNavMenu(event, index)
              }
              {...navLinkStyles}
            >
              {link.innerText}
            </StyledButton>
          </StyledLink>
          {link.showDropDown && (
            <NavbarMenu
              getLinkDropDown={getLinkDropDown}
              handleCloseNavMenu={handleCloseNavMenu}
              link={link}
              index={index}
            />
          )}
        </React.Fragment>
      ))}
    </FullViewBox>
  );
};

export default NavbarFullViewBox1;
