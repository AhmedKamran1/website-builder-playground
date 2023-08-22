export const CommonEventTypeEnum = {
  SETINITIALSTATE: "setInitialState",
  CHANGECOLOR: "changeColor",
  CHANGEBGCOLOR: "changeBgColor",
  // CHANGEFONTWEIGHT: "changeFontWeight",
  // CHANGEFONTSTYLE: "changeFontStyle",
  // CHANGEHOVERCOLOR: "changeHoverColor",
  // CHANGEFONTFAMILY: "changeFontFamily",
};

export const buttonEventType = {
  CHANGEHEIGHT: "changeHeight",
  CHANGEWIDTH: "changeWidth",
  CHANGEFONTSIZE: "changeFontSize",
  CHANGEHEIGHTUNIT: "changeHeightUnit",
  CHANGEWIDTHUNIT: "changeWidthUnit",
  CHANGEFONTSIZEUNIT: "changeFontSizeUnit",
  CHANGEREDIRECTLINK: "changeRedirectLink",
  CHANGEFONTWEIGHT: "changeFontWeight",
  CHANGEFONTSTYLE: "changeFontStyle",
  CHANGEHOVERCOLOR: "changeHoverColor",
  CHANGEINNERTEXT: "changeInnerText",
  CHANGEFONTFAMILY: "changeFontFamily",
};

export const NavEventTypesEnum = {
  navbarFunctionalities: {
    CHANGENAVREDIRECTLINK: "changeNavRedirectLink",
    ADDNAVLINK: "addNavLink",
    DELETENAVLINK: "deleteNavLink",
    CHANGENAVINNERTEXT: "changeNavInnerText",
    CHANGENAVLOGO: "changeNavLogo",
    CHANGENAVTITLE: "changeNavTitle",
    CHANGENAVLINKICON: "changeNavLinkIcon",
  },
  navbarStyles: {
    CHANGENAVFONTWEIGHT: "changeFontWeight",
    CHANGENAVFONTSTYLE: "changeFontStyle",
    CHANGENAVHOVERCOLOR: "changeHoverColor",
    CHANGENAVFONTFAMILY: "changeFontFamily",
  },
  navbarLoginButtonStyles: {
    CHANGENAVLOGINBUTTONCOLOR: "changeNavLoginButtonColor",
    CHANGENAVLOGINBUTTONBGCOLOR: "changeNavLoginButtonBackgroundColor",
    CHANGENAVLOGINBUTTONHOVERCOLOR: "changeNavLoginButtonHoverColor",
    CHANGENAVLOGINBUTTONFONTWEIGHT: "changeNavLoginButtonFontWeight",
    CHANGENAVLOGINBUTTONFONTSTYLE: "changeNavLoginButtonFontStyle",
  },
};

export const SectionEventTypesEnum = {
  sectionTextFunctionalities: {
    CHANGEHEADINGTEXT: "changeHeadingText",
    CHANGEPARAGRAPHTEXT: "changeParagraphText",
    CHANGESUBHEADINGTEXT: "changeSubHeadingText",
    CHANGEPRICINGTEXT: "changePricingText",
  },
  sectionImageFunctionalities: {
    CHANGEIMAGE: "changeImage",
    CHANGEIMAGEREDIRECTLINK: "changeImageRedirectLink",
    CHANGEIMAGEALTTEXT: "changeImageAltText",
  },
  sectionGridImageFunctionalities: {
    CHANGEGRIDIMAGE: "changeImage",
    CHANGEGRIDIMAGEREDIRECTLINK: "changeImageRedirectLink",
    CHANGEGRIDIMAGEALTTEXT: "changeImageAltText",
    ADDGRIDITEM: "addGridItem",
    DELETEGRIDITEM: "deleteGridItem",
    CHANGEGRIDHEADINGTEXT: "changeGridHeadingText",
    CHANGEGRIDPARAGRAPHTEXT: "changeGridParagraphText",
    CHANGEGRIDSUBHEADINGTEXT: "changeGridSubHeadingText",
    CHANGEGRIDPRICINGTEXT: "changeGridPricingText",
  },
  headingStyles: {
    CHANGEHEADINGTEXTALIGNMENT: "changeTextAlignment",
    CHANGEHEADINGFONTWEIGHT: "changeFontWeight",
    CHANGEHEADINGFONTSTYLE: "changeFontStyle",
  },
  paragraphStyles: {
    CHANGEPARAGRAPHTEXTALIGNMENT: "changeTextAlignment",
    CHANGEPARAGRAPHFONTWEIGHT: "changeFontWeight",
    CHANGEPARAGRAPHFONTSTYLE: "changeFontStyle",
  },
  subHeadingStyles: {
    CHANGEPARAGRAPHTEXTALIGNMENT: "changeTextAlignment",
    CHANGEPARAGRAPHFONTWEIGHT: "changeFontWeight",
    CHANGEPARAGRAPHFONTSTYLE: "changeFontStyle",
  },
  buttonStyles: {
    CHANGEBORDERRADIUS: "changeBorderRadius",
    CHANGEPARAGRAPHFONTWEIGHT: "changeFontWeight",
    CHANGEPARAGRAPHFONTSTYLE: "changeFontStyle",
  },
  pricingStyles: {
    CHANGEPARAGRAPHFONTWEIGHT: "changeFontWeight",
    CHANGEPARAGRAPHFONTSTYLE: "changeFontStyle",
  },
  cardStyles: {
    CHANGEBORDERRADIUS: "changeBorderRadius",
  },
  imageStyles: {
    CHANGEBORDERRADIUS: "changeBorderRadius",
  },
  blockStyles: {
    CHANGEFLEXDIRECTION: "changeFlexDirection",
  },
};
