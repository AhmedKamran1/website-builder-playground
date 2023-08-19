export const headingStyles = {
  colorHex: "#FFFFFF",
  fontWeight: "",
  fontStyle: "",
  fontFamily: "",
  textAlign: "center",
};

export const paragraphStyles = {
  colorHex: "#FFFFFF",
  fontWeight: "",
  fontStyle: "",
  fontFamily: "",
  textAlign: "center",
};

export const blockStyles = {
  backgroundColor: "#000000",
  flexDirection: "row",
};

export const imageStyles = {
  borderRadius: 1,
};

export const textFunctionalities = {
  headingText: "This is a heading",
  paragraphText: "This is a paragraph",
};

export const imageFunctionalities = {
  image: "",
  imageRedirectLink: "https://",
  imageAltText: "Enter Text about image",
};

export const gridImageItem = {
  textFunctionalities: textFunctionalities,
  imageFunctionalities: imageFunctionalities,
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
      ],
    },
  },
];
