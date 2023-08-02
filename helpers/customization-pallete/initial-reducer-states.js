import {
  loginButtonStyles,
  navLink,
  navLinkStyles,
} from "../pre-defined-components-styles/navbar-styles";

export const commonInitialState = {
  color: "#FFFFFF",
  backgroundColor: "#FFFFFF",
};

export const buttonInitialState = {
  redirectLink: "",
  fontWeight: "",
  fontStyle: "",
  fontFamily: "",
  hoverColor: "#FFFFFF",
  innerText: "",
};

export const navbarInitialState = {
  title: "",
  logo: "",
  styles: {
    navLinkStyles: navLinkStyles,
    loginButtonStyles: loginButtonStyles,
  },
  links: [navLink],
};
