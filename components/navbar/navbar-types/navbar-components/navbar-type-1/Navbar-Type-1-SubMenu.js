import React from "react";

import { Menu, MenuItem } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

const NavbarSubMenu1 = ({ title, children, showDropDown }) => {
  const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState(null);

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  return (
    <React.Fragment>
      <MenuItem onClick={(event) => showDropDown && handleSubMenuClick(event)}>
        {title}
        {showDropDown && <ArrowRight />}
      </MenuItem>

      {showDropDown && (
        <Menu
          anchorEl={subMenuAnchorEl}
          open={Boolean(subMenuAnchorEl)}
          onClose={handleSubMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {children}
        </Menu>
      )}
    </React.Fragment>
  );
};

export default NavbarSubMenu1;
