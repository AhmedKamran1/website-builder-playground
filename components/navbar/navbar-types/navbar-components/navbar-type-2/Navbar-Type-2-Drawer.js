import React from "react";

import { Drawer, List, ListItem } from "@mui/material";



import {
  ResponsiveContainer,
  StyledListItemButton,
  StyledListItemText,
} from "@/styles/pre-defined-components/navbar/navbar-styled-types/navbar-type-2-styles";
import { StyledButton, StyledLink } from "@/styles/pre-defined-components/common-styled-components/common-components";

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
