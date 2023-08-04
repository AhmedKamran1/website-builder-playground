import {
  loginButtonStyles,
  navLink,
  navLinkStyles,
} from "@/helpers/pre-defined-components-styles/navbar-styles";

export const navbarInitialState = {
  styles: {
    navLinkStyles: navLinkStyles,
    loginButtonStyles: loginButtonStyles,
  },
  extraFunctionalities: {
    title: "",
    logo: "",
    links: [navLink],
  },
};
