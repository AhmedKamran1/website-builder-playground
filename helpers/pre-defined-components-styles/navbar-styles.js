export const navLink = {
  innerText: "Home",
  redirectLink: "",
  icon: "",
};

export const navLinkStyles = {
  colorHex: "#FFFFFF",
  backgroundColor: "#000000",
  fontWeight: "",
  fontStyle: "",
  fontFamily: "",
  hoverColor: "#000000",
};

export const loginButtonStyles = {
  colorHex: "#FFFFFF",
  backgroundColor: "#000000",
  fontWeight: "",
  fontStyle: "",
  fontFamily: "",
  hoverColor: "#000000",
};

export const initialNavbarComponentStyles = [
  {
    navId: "1",
    styles: {
      navLinkStyles: navLinkStyles,
      loginButtonStyles: loginButtonStyles,
    },
    extraFunctionalities: {
      title: "Add Title",
      logo: "",
      links: [navLink],
    },
  },
  {
    navId: "2",
    styles: {
      navLinkStyles: navLinkStyles,
      loginButtonStyles: loginButtonStyles,
    },
    extraFunctionalities: {
      title: "",
      logo: "",
      links: [navLink],
    },
  },
];
