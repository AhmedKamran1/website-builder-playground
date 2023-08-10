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

// import {
//   loginButtonStyles,
//   navLink,
//   navLinkStyles,
// } from "@/helpers/pre-defined-components-styles/navbar-styles";

// export const navbarInitialLoginbuttonState = {
//   styles: {
//     loginButtonStyles: loginButtonStyles,
//   }
// };

// export const navbarInitialLinkState = {
//   styles: {
//     navLinkStyles: navLinkStyles,
//   },
//   extraFunctionalities: {
//     title: "",
//     logo: "",
//     links: [navLink],
//   },
// };