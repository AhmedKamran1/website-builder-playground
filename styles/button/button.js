import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(
  ({ colorhex, height, width, backgroundcolor, fontsize, theme }) => ({
    backgroundColor: backgroundcolor,
    width: width,
    color: colorhex,
    height: height,
    fontSize: fontsize,
    [theme.breakpoints.down("md")]: {
      width: "500px",
    },

    "&:hover": {
      backgroundColor: "gray",
    },
  })
);

// export const initialComponentStyles = {
//   color: "#FF0000",
//   height: "30px",
//   width: "30px",
//   backgroundColor: "#FFFFFF",
//   fontSize: "10px",
// };
