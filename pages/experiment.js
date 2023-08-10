import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const NestedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
      >
        Open Menu
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
        <MenuItem onClick={handleClose}>Option 4</MenuItem>
        <SubMenu onClose={handleClose} title="Nested Options">
          <MenuItem>Nested Option 1</MenuItem>
          <MenuItem>Nested Option 2</MenuItem>
          <MenuItem>Nested Option 3</MenuItem>
        </SubMenu>
        <SubMenu onClose={handleClose} title="Nested Options">
          <MenuItem>Nested Option 4</MenuItem>
          <MenuItem>Nested Option 5</MenuItem>
          <MenuItem>Nested Option 6</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

const SubMenu = ({ onClose, title, children }) => {
  const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState(null);

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  const handleMenuItemClick = (event, option) => {
    handleSubMenuClose();
    onClose(event);
  };

  return (
    <React.Fragment>
      <MenuItem onClick={handleSubMenuClick}>{title}</MenuItem>
      <Menu
        anchorEl={subMenuAnchorEl}
        open={Boolean(subMenuAnchorEl)}
        onClose={handleSubMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            onClick: (event) =>
              handleMenuItemClick(event, child.props.children),
          });
        })}
      </Menu>
    </React.Fragment>
  );
};

export default NestedMenu;
