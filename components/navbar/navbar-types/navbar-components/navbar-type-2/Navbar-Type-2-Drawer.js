import React from "react";

import { Collapse, Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

import {
  StyledLink,
  StyledListItemButton,
  StyledListItemText,
} from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { StyledButton } from "@/styles/pre-defined-components/button/button";
import { ResponsiveContainer } from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";

const NavbarDrawer2 = ({
  showDrawer,
  handleNavDrawer,
  links,
  handleCollapseList,
  getResponsiveLinkDropDown,
  loginButtonStyles,
}) => {
  return (
    <Drawer
      anchor="left"
      open={showDrawer}
      onClose={handleNavDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "45vw",
        },
      }}
    >
      <ResponsiveContainer>
        <List sx={{ width: "90%" }}>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <StyledLink href={link?.redirectLink}>
                <ListItem disablePadding divider>
                  <StyledListItemButton
                    onClick={(event) => handleCollapseList(event, index)}
                  >
                    <StyledListItemText primary={link?.innerText} />
                    <ListItemIcon sx={{ minWidth: "15px" }}>
                      {link.showDropDown && <KeyboardArrowDown />}
                    </ListItemIcon>
                  </StyledListItemButton>
                </ListItem>
              </StyledLink>
              {link.showDropDown && (
                <Collapse
                  in={getResponsiveLinkDropDown(index)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {link.dropDown.map(
                      (sublink, subindex) =>
                        sublink?.dropDownInnerText && (
                          <StyledLink
                            href={sublink?.dropDownRedirectLink}
                            key={subindex}
                          >
                            <StyledListItemButton>
                              <StyledListItemText
                                sx={{ ml: -1.5 }}
                                primary={sublink?.dropDownInnerText}
                              />
                            </StyledListItemButton>
                          </StyledLink>
                        )
                    )}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
        <StyledButton
          variant="contained"
          sx={{ ml: -1.5 }}
          {...loginButtonStyles}
        >
          Login
        </StyledButton>
      </ResponsiveContainer>
    </Drawer>
  );
};

export default NavbarDrawer2;
