import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "../../constants/event-types/event-types";
import {
  sectionInitialButtonStylesState,
  sectionInitialPricingStylesState,
} from "../initial-reducer-states/initial-section-state";

export const sectionTextReducer = (state, action) => {
  switch (action.type) {
    // TEXT FUNCTIONALITIES
    case SectionEventTypesEnum.sectionTextFunctionalities.CHANGEHEADINGTEXT:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          textFunctionalities: {
            ...state.extraFunctionalities.textFunctionalities,
            headingText: action.payload,
          },
        },
      };
    case SectionEventTypesEnum.sectionTextFunctionalities.CHANGEPARAGRAPHTEXT:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          textFunctionalities: {
            ...state.extraFunctionalities.textFunctionalities,
            paragraphText: action.payload,
          },
        },
      };

    case SectionEventTypesEnum.sectionTextFunctionalities.CHANGESUBHEADINGTEXT:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          textFunctionalities: {
            ...state.extraFunctionalities.textFunctionalities,
            subHeadingText: action.payload,
          },
        },
      };

    case SectionEventTypesEnum.sectionTextFunctionalities.CHANGEPRICINGTEXT:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          textFunctionalities: {
            ...state.extraFunctionalities.textFunctionalities,
            pricingText: action.payload,
          },
        },
      };

    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          textFunctionalities: action.payload.extraFunctionalities
            .textFunctionalities ?? {
            ...state.extraFunctionalities.textFunctionalities,
          },
        },
      };
    default:
      return state;
  }
};

export const sectionImageReducer = (state, action) => {
  switch (action.type) {
    // IMAGE FUNCTIONALITIES
    case SectionEventTypesEnum.sectionImageFunctionalities.CHANGEIMAGE:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageFunctionalities: {
            ...state.extraFunctionalities.imageFunctionalities,
            image: action.payload,
          },
        },
      };
    case SectionEventTypesEnum.sectionImageFunctionalities
      .CHANGEIMAGEREDIRECTLINK:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageFunctionalities: {
            ...state.extraFunctionalities.imageFunctionalities,
            imageRedirectLink: action.payload,
          },
        },
      };
    case SectionEventTypesEnum.sectionImageFunctionalities.CHANGEIMAGEALTTEXT:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageFunctionalities: {
            ...state.extraFunctionalities.imageFunctionalities,
            imageAltText: action.payload,
          },
        },
      };

    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageFunctionalities: action.payload.extraFunctionalities
            .imageFunctionalities ?? {
            ...state.extraFunctionalities.imageFunctionalities,
          },
        },
      };
    default:
      return state;
  }
};

export const sectionButtonReducer = (state, action) => {
  switch (action.type) {
    // BUTTON FUNCTIONALITIES
    case SectionEventTypesEnum.sectionButtonFunctionalities.CHANGEBUTTONTEXT:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          buttonFunctionalities: {
            ...state.extraFunctionalities.buttonFunctionalities,
            buttonText: action.payload,
          },
        },
      };
    case SectionEventTypesEnum.sectionButtonFunctionalities
      .CHANGEBUTTONREDIRECTLINK:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          buttonFunctionalities: {
            ...state.extraFunctionalities.buttonFunctionalities,
            buttonRedirectLink: action.payload,
          },
        },
      };

    case SectionEventTypesEnum.sectionButtonFunctionalities
      .CHANGEBUTTONVISIBILITY:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          buttonFunctionalities: {
            ...state.extraFunctionalities.buttonFunctionalities,
            showButton:
              !state.extraFunctionalities.buttonFunctionalities.showButton,
          },
        },
      };

    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          buttonFunctionalities: action.payload.extraFunctionalities
            .buttonFunctionalities ?? {
            ...state.extraFunctionalities.buttonFunctionalities,
          },
        },
      };
    default:
      return state;
  }
};

export const sectionGridImageReducer = (state, action) => {
  let updatedGridImages,
    gridIndex,
    subHeadingText,
    headingText,
    paragraphText,
    pricingText,
    currencyType,
    image,
    imageAltText,
    imageRedirectLink,
    buttonText,
    buttonRedirectLink;
  updatedGridImages = structuredClone(
    state.extraFunctionalities.imageGridFunctionalities
  );
  switch (action.type) {
    case CommonEventTypeEnum.CHANGECOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          headingStyles: {
            ...state.styles.headingStyles,
            colorHex: action.payload,
          },
        },
      };
    //GRID FUNCTIONALITIES
    case SectionEventTypesEnum.sectionGridImageFunctionalities.ADDGRIDITEM:
      updatedGridImages.push(action.payload);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case SectionEventTypesEnum.sectionGridImageFunctionalities.DELETEGRIDITEM:
      updatedGridImages.splice(action.payload, 1);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case SectionEventTypesEnum.sectionGridImageFunctionalities
      .CHANGEGRIDHEADINGTEXT:
      ({ gridIndex, headingText } = action.payload);
      updatedGridImages[gridIndex].textFunctionalities.headingText =
        headingText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case SectionEventTypesEnum.sectionGridImageFunctionalities
      .CHANGEGRIDSUBHEADINGTEXT:
      ({ gridIndex, subHeadingText } = action.payload);
      updatedGridImages[gridIndex].textFunctionalities.subHeadingText =
        subHeadingText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case SectionEventTypesEnum.sectionGridImageFunctionalities
      .CHANGEGRIDPRICINGTEXT:
      ({ gridIndex, pricingText } = action.payload);
      updatedGridImages[gridIndex].pricingFunctionalities.pricingText =
        pricingText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case SectionEventTypesEnum.sectionGridImageFunctionalities
      .CHANGEGRIDPRICINGCURRENCYTYPE:
      ({ gridIndex, currencyType } = action.payload);
      updatedGridImages[gridIndex].pricingFunctionalities.currencyType =
        currencyType;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case SectionEventTypesEnum.sectionGridImageFunctionalities
      .CHANGEGRIDPARAGRAPHTEXT:
      ({ gridIndex, paragraphText } = action.payload);
      updatedGridImages[gridIndex].textFunctionalities.paragraphText =
        paragraphText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case SectionEventTypesEnum.sectionGridImageFunctionalities.CHANGEGRIDIMAGE:
      ({ gridIndex, image } = action.payload);
      updatedGridImages[gridIndex].imageFunctionalities.image = image;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };
    case SectionEventTypesEnum.sectionGridImageFunctionalities
      .CHANGEGRIDIMAGEALTTEXT:
      ({ gridIndex, imageAltText } = action.payload);
      updatedGridImages[gridIndex].imageFunctionalities.imageAltText =
        imageAltText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };
    case SectionEventTypesEnum.sectionGridImageFunctionalities
      .CHANGEGRIDIMAGEREDIRECTLINK:
      ({ gridIndex, imageRedirectLink } = action.payload);
      updatedGridImages[gridIndex].imageFunctionalities.imageRedirectLink =
        imageRedirectLink;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case SectionEventTypesEnum.sectionGridImageFunctionalities
      .CHANGEGRIDBUTTONTEXT:
      ({ gridIndex, buttonText } = action.payload);
      updatedGridImages[gridIndex].buttonFunctionalities.buttonText =
        buttonText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };
    case SectionEventTypesEnum.sectionGridImageFunctionalities
      .CHANGEGRIDBUTTONREDIRECTLINK:
      ({ gridIndex, buttonRedirectLink } = action.payload);
      updatedGridImages[gridIndex].buttonFunctionalities.buttonRedirectLink =
        buttonRedirectLink;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities:
            action.payload.extraFunctionalities.imageGridFunctionalities ?? [],
        },
      };
    default:
      return state;
  }
};

export const sectionHeadingStylesReducer = (state, action) => {
  switch (action.type) {
    case CommonEventTypeEnum.CHANGECOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          headingStyles: {
            ...state.styles.headingStyles,
            colorHex: action.payload,
          },
        },
      };
    case SectionEventTypesEnum.headingStyles.CHANGEHEADINGFONTSTYLE:
      return {
        ...state,
        styles: {
          ...state.styles,
          headingStyles: {
            ...state.styles.headingStyles,
            fontStyle: action.payload,
            fontWeight: "",
          },
        },
      };

    case SectionEventTypesEnum.headingStyles.CHANGEHEADINGFONTWEIGHT:
      return {
        ...state,
        styles: {
          ...state.styles,
          headingStyles: {
            ...state.styles.headingStyles,
            fontWeight: action.payload,
            fontStyle: "",
          },
        },
      };
    case SectionEventTypesEnum.headingStyles.CHANGEHEADINGTEXTALIGNMENT:
      return {
        ...state,
        styles: {
          ...state.styles,
          headingStyles: {
            ...state.styles.headingStyles,
            textAlign: action.payload,
          },
        },
      };
    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          headingStyles: action.payload.styles.headingStyles,
        },
      };
    default:
      return state;
  }
};

export const sectionParagraphStylesReducer = (state, action) => {
  switch (action.type) {
    case CommonEventTypeEnum.CHANGECOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          paragraphStyles: {
            ...state.styles.paragraphStyles,
            colorHex: action.payload,
          },
        },
      };
    case SectionEventTypesEnum.paragraphStyles.CHANGEPARAGRAPHFONTSTYLE:
      return {
        ...state,
        styles: {
          ...state.styles,
          paragraphStyles: {
            ...state.styles.paragraphStyles,
            fontStyle: action.payload,
            fontWeight: "",
          },
        },
      };

    case SectionEventTypesEnum.paragraphStyles.CHANGEPARAGRAPHFONTWEIGHT:
      return {
        ...state,
        styles: {
          ...state.styles,
          paragraphStyles: {
            ...state.styles.paragraphStyles,
            fontWeight: action.payload,
            fontStyle: "",
          },
        },
      };
    case SectionEventTypesEnum.paragraphStyles.CHANGEPARAGRAPHTEXTALIGNMENT:
      return {
        ...state,
        styles: {
          ...state.styles,
          paragraphStyles: {
            ...state.styles.paragraphStyles,
            textAlign: action.payload,
          },
        },
      };
    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          paragraphStyles: action.payload.styles.paragraphStyles,
        },
      };
    default:
      return state;
  }
};

export const sectionSubHeadingStylesReducer = (state, action) => {
  switch (action.type) {
    case CommonEventTypeEnum.CHANGECOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          subHeadingStyles: {
            ...state.styles.subHeadingStyles,
            colorHex: action.payload,
          },
        },
      };
    case SectionEventTypesEnum.subHeadingStyles.CHANGESUBHEADINGFONTSTYLE:
      return {
        ...state,
        styles: {
          ...state.styles,
          subHeadingStyles: {
            ...state.styles.subHeadingStyles,
            fontStyle: action.payload,
            fontWeight: "",
          },
        },
      };

    case SectionEventTypesEnum.subHeadingStyles.CHANGESUBHEADINGFONTWEIGHT:
      return {
        ...state,
        styles: {
          ...state.styles,
          subHeadingStyles: {
            ...state.styles.subHeadingStyles,
            fontWeight: action.payload,
            fontStyle: "",
          },
        },
      };
    case SectionEventTypesEnum.subHeadingStyles.CHANGESUBHEADINGTEXTALIGNMENT:
      return {
        ...state,
        styles: {
          ...state.styles,
          subHeadingStyles: {
            ...state.styles.subHeadingStyles,
            textAlign: action.payload,
          },
        },
      };
    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          subHeadingStyles: action.payload.styles.subHeadingStyles ?? {
            ...state.styles.subHeadingStyles,
          },
        },
      };
    default:
      return state;
  }
};

export const sectionPricingStylesReducer = (state, action) => {
  switch (action.type) {
    case CommonEventTypeEnum.CHANGECOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          pricingStyles: {
            ...state.styles.pricingStyles,
            colorHex: action.payload,
          },
        },
      };
    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          pricingStyles: action.payload.styles.pricingStyles ?? {
            ...state.styles.pricingStyles,
          },
        },
      };
    default:
      return state;
  }
};

export const sectionCardStylesReducer = (state, action) => {
  switch (action.type) {
    case CommonEventTypeEnum.CHANGEBGCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          cardStyles: {
            ...state.styles.cardStyles,
            backgroundColor: action.payload,
          },
        },
      };

    case SectionEventTypesEnum.cardStyles.CHANGEBORDERRADIUS:
      return {
        ...state,
        styles: {
          ...state.styles,
          cardStyles: {
            ...state.styles.cardStyles,
            borderRadius: action.payload,
          },
        },
      };

    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          cardStyles: action.payload.styles.cardStyles ?? {
            ...state.styles.cardStyles,
          },
        },
      };
    default:
      return state;
  }
};

export const sectionButtonStylesReducer = (state, action) => {
  switch (action.type) {
    case CommonEventTypeEnum.CHANGECOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          buttonStyles: {
            ...state.styles.buttonStyles,
            colorHex: action.payload,
          },
        },
      };

    case CommonEventTypeEnum.CHANGEBGCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          buttonStyles: {
            ...state.styles.buttonStyles,
            backgroundColor: action.payload,
          },
        },
      };

    case SectionEventTypesEnum.buttonStyles.CHANGEBUTTONHOVERCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          buttonStyles: {
            ...state.styles.buttonStyles,
            hoverColor: action.payload,
          },
        },
      };

    case SectionEventTypesEnum.buttonStyles.CHANGEBUTTONFONTSTYLE:
      return {
        ...state,
        styles: {
          ...state.styles,
          buttonStyles: {
            ...state.styles.buttonStyles,
            fontStyle: action.payload,
            fontWeight:
              sectionInitialButtonStylesState.styles.buttonStyles.fontWeight,
          },
        },
      };

    case SectionEventTypesEnum.buttonStyles.CHANGEBUTTONFONTWEIGHT:
      return {
        ...state,
        styles: {
          ...state.styles,
          buttonStyles: {
            ...state.styles.buttonStyles,
            fontWeight: action.payload,
            fontStyle:
              sectionInitialButtonStylesState.styles.buttonStyles.fontStyle,
          },
        },
      };
    case SectionEventTypesEnum.buttonStyles.CHANGEBORDERRADIUS:
      return {
        ...state,
        styles: {
          ...state.styles,
          buttonStyles: {
            ...state.styles.buttonStyles,
            borderRadius: action.payload,
          },
        },
      };
    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          buttonStyles: action.payload.styles.buttonStyles ?? {
            ...state.styles.buttonStyles,
          },
        },
      };
    default:
      return state;
  }
};

export const sectionImageStylesReducer = (state, action) => {
  switch (action.type) {
    case SectionEventTypesEnum.imageStyles.CHANGEBORDERRADIUS:
      return {
        ...state,
        styles: {
          ...state.styles,
          imageStyles: {
            ...state.styles.imageStyles,
            borderRadius: action.payload,
          },
        },
      };

    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          imageStyles: action.payload.styles.imageStyles ?? {
            ...state.styles.imageStyles,
          },
        },
      };
    default:
      return state;
  }
};

export const sectionBlockStylesReducer = (state, action) => {
  switch (action.type) {
    case CommonEventTypeEnum.CHANGEBGCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          blockStyles: {
            ...state.styles.blockStyles,
            backgroundColor: action.payload,
          },
        },
      };

    case SectionEventTypesEnum.blockStyles.CHANGEFLEXDIRECTION:
      return {
        ...state,
        styles: {
          ...state.styles,
          blockStyles: {
            ...state.styles.blockStyles,
            flexDirection: action.payload,
          },
        },
      };

    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          blockStyles: action.payload.styles.blockStyles,
        },
      };
    default:
      return state;
  }
};
