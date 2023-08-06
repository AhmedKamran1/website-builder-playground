import React from "react";

import { StyledLink } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { TabItem } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";

import { KeyboardArrowDown } from "@mui/icons-material";
import { Tabs } from "@mui/material";


const NavbarTabs2 = ({
  tabValue,
  navLinkStyles,
  handleTabChange,
  links,
  handleOpenNavMenu,
}) => {
  return (
    <Tabs
      value={tabValue}
      textColor="inherit"
      TabIndicatorProps={{
        style: { backgroundColor: navLinkStyles.colorHex },
      }}
      onChange={handleTabChange}
      sx={{ width: "80%" }}
    >
      {links.map((link, index) => (
        <TabItem
          key={index}
          LinkComponent={StyledLink}
          icon={link.showDropDown ? <KeyboardArrowDown /> : ""}
          iconPosition={link.showDropDown ? "end" : "start"}
          href={link?.redirectLink}
          label={link?.innerText}
          sx={{ padding: 0, minHeight: "48px", width: "25%" }}
          onClick={(event) =>
            link.showDropDown && handleOpenNavMenu(event, index)
          }
          {...navLinkStyles}
        />
      ))}
    </Tabs>
  );
};

export default NavbarTabs2;
