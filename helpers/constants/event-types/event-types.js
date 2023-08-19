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
    ADDGRIDIMAGE: "addGridImage",
    DELETEGRIDIMAGE: "deleteGridImage",
    CHANGEGRIDHEADINGTEXT: "changeGridHeadingText",
    CHANGEGRIDPARAGRAPHTEXT: "changeGridParagraphText",
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
  imageStyles: {
    CHANGEIMAGEBORDERADIUS: "changeImageBorderRadius",
  },
  blockStyles: {
    CHANGEFLEXDIRECTION: "changeFlexDirection",
  },
};
