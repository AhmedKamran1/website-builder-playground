import {
  CommonEventTypeEnum,
  SectionEventTypesEnum,
} from "../../constants/event-types/event-types";
import {
  sectionInitialHeadingStylesState,
  sectionInitialParagraphStylesState,
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

export const sectionGridImageReducer = (state, action) => {
  let updatedGridImages,
    gridIndex,
    headingText,
    paragraphText,
    image,
    imageAltText,
    imageRedirectLink;
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
    case SectionEventTypesEnum.sectionGridImageFunctionalities.ADDGRIDIMAGE:
      updatedGridImages.push(action.payload);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          imageGridFunctionalities: updatedGridImages,
        },
      };

    case SectionEventTypesEnum.sectionGridImageFunctionalities.DELETEGRIDIMAGE:
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
            fontWeight:
              sectionInitialHeadingStylesState.styles.headingStyles.fontWeight,
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
            fontStyle:
              sectionInitialHeadingStylesState.styles.headingStyles.fontStyle,
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
            fontWeight:
              sectionInitialParagraphStylesState.styles.paragraphStyles
                .fontWeight,
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
            fontStyle:
              sectionInitialParagraphStylesState.styles.paragraphStyles
                .fontStyle,
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

export const sectionImageStylesReducer = (state, action) => {
  switch (action.type) {
    case SectionEventTypesEnum.imageStyles.CHANGEIMAGEBORDERADIUS:
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
