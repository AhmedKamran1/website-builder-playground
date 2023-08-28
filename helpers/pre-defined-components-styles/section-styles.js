export const headingStyles = {
  colorHex: "#000000",
  fontWeight: "bold",
  fontStyle: "",
  textAlign: "center",
};

export const subHeadingStyles = {
  colorHex: "#000000",
  fontWeight: "normal",
  fontStyle: "",
  textAlign: "center",
};

export const paragraphStyles = {
  colorHex: "#000000",
  fontWeight: "normal",
  fontStyle: "",
  textAlign: "center",
};

export const buttonStyles = {
  colorHex: "#000000",
  backgroundColor: "#FFFFFF",
  fontWeight: "normal",
  fontStyle: "",
  hoverColor: "#FF0000",
  borderRadius: 1,
};

export const pricingStyles = {
  colorHex: "#000000",
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
};

export const imageFunctionalities = {
  image: "",
  imageRedirectLink: "https://",
  imageAltText: "Enter Text about image",
};

export const pricingFunctionalities = {
  pricingText: "0",
  currencyType: "PKR",
};

export const buttonFunctionalities = {
  showButton: true,
  buttonText: "Action",
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
  pricingFunctionalities: pricingFunctionalities,
};

export const gridTextItem = {
  textFunctionalities: textFunctionalities,
  buttonFunctionalities: buttonFunctionalities,
  pricingFunctionalities: pricingFunctionalities,
};

export const initialSectionComponentStyles = [
  {
    secId: "1",
    styles: {
      headingStyles: headingStyles,
      paragraphStyles: paragraphStyles,
      subHeadingStyles: subHeadingStyles,
      imageStyles: imageStyles,
      blockStyles: blockStyles,
      buttonStyles: buttonStyles,
    },
    extraFunctionalities: {
      textFunctionalities: textFunctionalities,
      imageFunctionalities: imageFunctionalities,
      buttonFunctionalities: buttonFunctionalities,
    },
  },
  {
    secId: "2",
    styles: {
      headingStyles: headingStyles,
      paragraphStyles: paragraphStyles,
      subHeadingStyles: subHeadingStyles,
      blockStyles: blockStyles,
      buttonStyles: buttonStyles,
    },
    extraFunctionalities: {
      textFunctionalities: textFunctionalities,
      buttonFunctionalities: buttonFunctionalities,
    },
  },
  {
    secId: "3",
    styles: {
      headingStyles: headingStyles,
      paragraphStyles: paragraphStyles,
      imageStyles: imageStyles,
      blockStyles: blockStyles,
      buttonStyles: buttonStyles,
    },
    extraFunctionalities: {
      imageGridFunctionalities: [
        structuredClone(gridImageItem),
        structuredClone(gridImageItem),
        structuredClone(gridImageItem),
        structuredClone(gridImageItem),
      ],
      buttonFunctionalities: buttonFunctionalities,
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
      cardStyles: cardStyles,
      buttonStyles: buttonStyles,
      pricingStyles: pricingStyles,
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
