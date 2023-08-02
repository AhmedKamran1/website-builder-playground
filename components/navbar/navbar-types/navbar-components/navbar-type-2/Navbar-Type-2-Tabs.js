import React from "react";

import {
  StyledLink,
  TabItem,
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";

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
      variant="fullWidth"
      TabIndicatorProps={{
        style: { backgroundColor: navLinkStyles.colorHex },
      }}
      onChange={handleTabChange}
      sx={{ width: "100%" }}
    >
      {links.map((link, index) => (
        <TabItem
          key={index}
          LinkComponent={StyledLink}
          icon={link.showDropDown ? <KeyboardArrowDown /> : ""}
          iconPosition={link.showDropDown ? "end" : "start"}
          href={link?.redirectLink}
          label={link?.innerText}
          sx={{ padding: 0 }}
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
