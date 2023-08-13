import React from "react";

import { Drawer, List, ListItem } from "@mui/material";

import { StyledLink } from "@/styles/pre-defined-components/navbar/navbar-common-styles";
import { StyledButton } from "@/styles/pre-defined-components/button/button";
import {
  ResponsiveContainer,
  StyledListItemButton,
  StyledListItemText,
} from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";

const NavbarDrawer2 = ({
  showDrawer,
  handleNavDrawer,
  links,
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
                  <StyledListItemButton>
                    <StyledListItemText primary={link?.innerText} />
                  </StyledListItemButton>
                </ListItem>
              </StyledLink>
            </React.Fragment>
          ))}
        </List>
        <StyledButton variant="contained" {...loginButtonStyles}>
          Login
        </StyledButton>
      </ResponsiveContainer>
    </Drawer>
  );
};

export default NavbarDrawer2;
