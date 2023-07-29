export const dropDownLink = {
  dropDownRedirectLink: "",
  dropDownInnerText: "",
};

export const navLink = {
  innerText: "Home",
  redirectLink: "",
  icon: "",
  showDropDown: false,
  dropDown: [dropDownLink],
};

export const initialNavbarComponentStyles = [
  {
    navId: "1",
    styles: {
      colorhex: "#FFFFFF",
      backgroundcolor: "#000000",
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
      colorhex: "#FFFFFF",
      backgroundcolor: "#000000",
    },
    extraFunctionalities: {
      title: "",
      logo: "",
      links: [navLink],
    },
  },
];
