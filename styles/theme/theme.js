const theme = () => {
  return {
    typography: {
      allVariants: {
        fontFamily: '"Open Sans", sans-serif',
        textTransform: "none",
      },
    },
    pallete: {
      main: {
        primary: "rgb(255, 255, 255)",
        secondary: "rgba(236, 236, 236, 1)",
      },
      text: {
        primary: "rgb(0, 0, 0)",
        secondary: "rgb(255, 255, 255)",
      },
      static: {
        primary: "rgb(0, 0, 0)",
        secondary: "rgb(255, 255, 255)",
        other: "rgb(112,112,112)",
      },
    },
  };
};

export default theme;
