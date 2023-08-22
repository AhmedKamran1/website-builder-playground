export const headingStyles = {
  colorHex: "#000000",
  fontWeight: "",
  fontStyle: "",
  textAlign: "center",
};

export const subHeadingStyles = {
  colorHex: "#000000",
  fontWeight: "",
  fontStyle: "",
  textAlign: "center",
};

export const paragraphStyles = {
  colorHex: "#000000",
  fontWeight: "",
  fontStyle: "",
  textAlign: "center",
};

export const buttonStyles = {
  colorHex: "#000000",
  backgroundColor: "#FFFFFF",
  fontWeight: "",
  fontStyle: "",
  borderRadius: 1,
};

export const pricingStyles = {
  colorHex: "#000000",
  fontWeight: "",
  fontStyle: "",
};

export const blockStyles = {
  backgroundColor: "#FFFFFF",
  flexDirection: "row",
};

export const cardStyles = {
  backgroundColor: "#FFFFFF",
  borderRadius: 1,
};

export const imageStyles = {
  borderRadius: 1,
};

export const textFunctionalities = {
  subHeadingText: "This is subheading",
  headingText: "This is a heading",
  paragraphText: "This is a paragraph",
  pricingText: "1000 Rs",
};

export const imageFunctionalities = {
  image: "",
  imageRedirectLink: "https://",
  imageAltText: "Enter Text about image",
};

export const buttonFunctionalities = {
  buttonText: "Button",
  buttonRedirectLink: "https://",
};

export const gridImageItem = {
  textFunctionalities: textFunctionalities,
  imageFunctionalities: imageFunctionalities,
};

export const gridImageWithButtonItem = {
  textFunctionalities: textFunctionalities,
  imageFunctionalities: imageFunctionalities,
  buttonFunctionalities: buttonFunctionalities,
};

export const gridTextItem = {
  textFunctionalities: textFunctionalities,
  buttonFunctionalities: buttonFunctionalities,
};

export const initialSectionComponentStyles = [
  {
    secId: "1",
    styles: {
      headingStyles: headingStyles,
      paragraphStyles: paragraphStyles,
      imageStyles: imageStyles,
      blockStyles: blockStyles,
    },
    extraFunctionalities: {
      textFunctionalities: textFunctionalities,
      imageFunctionalities: imageFunctionalities,
    },
  },
  {
    secId: "2",
    styles: {
      headingStyles: headingStyles,
      paragraphStyles: paragraphStyles,
      blockStyles: blockStyles,
    },
    extraFunctionalities: {
      textFunctionalities: textFunctionalities,
    },
  },
  {
    secId: "3",
    styles: {
      headingStyles: headingStyles,
      paragraphStyles: paragraphStyles,
      imageStyles: imageStyles,
      blockStyles: blockStyles,
    },
    extraFunctionalities: {
      imageGridFunctionalities: [
        structuredClone(gridImageItem),
        structuredClone(gridImageItem),
        structuredClone(gridImageItem),
        structuredClone(gridImageItem),
      ],
    },
  },
  {
    secId: "4",
    styles: {
      headingStyles: headingStyles,
      paragraphStyles: paragraphStyles,
      imageStyles: imageStyles,
      blockStyles: blockStyles,
      cardStyles: cardStyles,
      buttonStyles: buttonStyles,
    },
    extraFunctionalities: {
      textFunctionalities: textFunctionalities,
      imageFunctionalities: imageFunctionalities,
      buttonFunctionalities: buttonFunctionalities,
    },
  },
  {
    secId: "5",
    styles: {
      headingStyles: headingStyles,
      paragraphStyles: paragraphStyles,
      blockStyles: blockStyles,
      cardStyles: cardStyles,
      pricingStyles: pricingStyles,
      buttonStyles: buttonStyles,
    },
    extraFunctionalities: {
      imageGridFunctionalities: [
        structuredClone(gridTextItem),
        structuredClone(gridTextItem),
      ],
    },
  },
  {
    secId: "6",
    styles: {
      headingStyles: headingStyles,
      paragraphStyles: paragraphStyles,
      imageStyles: imageStyles,
      blockStyles: blockStyles,
    },
    extraFunctionalities: {
      imageGridFunctionalities: [
        structuredClone(gridImageWithButtonItem),
        structuredClone(gridImageWithButtonItem),
        structuredClone(gridImageWithButtonItem),
        structuredClone(gridImageWithButtonItem),
      ],
    },
  },
];
