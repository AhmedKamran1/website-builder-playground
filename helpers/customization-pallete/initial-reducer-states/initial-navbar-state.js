import {
  loginButtonStyles,
  navLink,
  navLinkStyles,
} from "@/helpers/pre-defined-components-styles/navbar-styles";

export const navbarInitialLoginButtonStylesState = {
  styles: {
    loginButtonStyles: loginButtonStyles,
  },
};

export const navbarInitialLinkStylesState = {
  styles: {
    navLinkStyles: navLinkStyles,
  },
};

export const navbarInitialFunctionalitiesState = {
  extraFunctionalities: {
    title: "",
    logo: "",
    links: [navLink],
  },
};
