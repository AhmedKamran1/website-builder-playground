import {
  CommonEventTypeEnum,
  NavEventTypesEnum,
} from "../../constants/event-types/event-types";

import {
  navbarInitialLinkStylesState,
  navbarInitialLoginButtonStylesState,
} from "../initial-reducer-states/initial-navbar-state";

export const navFunctionalitiesReducer = (state, action) => {
  let linkIndex, navLink, innerText, redirectLink, updatedLinks;

  updatedLinks = structuredClone(state.extraFunctionalities.links);

  switch (action.type) {
    // FUNCTIONALITIES

    case NavEventTypesEnum.navbarFunctionalities.ADDNAVLINK:
      ({ navLink } = action.payload);

      updatedLinks.push(navLink);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case NavEventTypesEnum.navbarFunctionalities.DELETENAVLINK:
      ({ linkIndex } = action.payload);
      updatedLinks.splice(linkIndex, 1);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case NavEventTypesEnum.navbarFunctionalities.CHANGENAVTITLE:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          title: action.payload,
        },
      };

    case NavEventTypesEnum.navbarFunctionalities.CHANGENAVLOGO:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          logo: action.payload,
        },
      };

    case NavEventTypesEnum.navbarFunctionalities.CHANGENAVINNERTEXT:
      ({ linkIndex, innerText } = action.payload);
      updatedLinks[linkIndex].innerText = innerText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case NavEventTypesEnum.navbarFunctionalities.CHANGENAVREDIRECTLINK:
      ({ linkIndex, redirectLink } = action.payload);
      updatedLinks[linkIndex].redirectLink = redirectLink;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        extraFunctionalities: action.payload.extraFunctionalities,
      };
  }
};

export const navStylesReducer = (state, action) => {
  switch (action.type) {
    //NAVBAR LINK STYLES
    case CommonEventTypeEnum.CHANGECOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          navLinkStyles: {
            ...state.styles.navLinkStyles,
            colorHex: action.payload,
          },
        },
      };
    case CommonEventTypeEnum.CHANGEBGCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          navLinkStyles: {
            ...state.styles.navLinkStyles,
            backgroundColor: action.payload,
          },
        },
      };

    case NavEventTypesEnum.navbarStyles.CHANGENAVFONTSTYLE:
      return {
        ...state,
        styles: {
          ...state.styles,
          navLinkStyles: {
            ...state.styles.navLinkStyles,
            fontStyle: action.payload,
            fontWeight:
              navbarInitialLinkStylesState.styles.navLinkStyles.fontWeight,
          },
        },
      };

    case NavEventTypesEnum.navbarStyles.CHANGENAVFONTWEIGHT:
      return {
        ...state,
        styles: {
          ...state.styles,
          navLinkStyles: {
            ...state.styles.navLinkStyles,
            fontWeight: action.payload,
            fontStyle:
              navbarInitialLinkStylesState.styles.navLinkStyles.fontStyle,
          },
        },
      };

    case NavEventTypesEnum.navbarStyles.CHANGENAVHOVERCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          navLinkStyles: {
            ...state.styles.navLinkStyles,
            hoverColor: action.payload,
          },
        },
      };

    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          navLinkStyles: action.payload.styles.navLinkStyles,
        },
      };

    default:
      return state;
  }
};

export const navLoginButtonStylesReducer = (state, action) => {
  switch (action.type) {
    //NAVBAR LOGIN BUTTON STYLES
    case CommonEventTypeEnum.CHANGECOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          loginButtonStyles: {
            ...state.styles.loginButtonStyles,
            colorHex: action.payload,
          },
        },
      };
    case CommonEventTypeEnum.CHANGEBGCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          loginButtonStyles: {
            ...state.styles.loginButtonStyles,
            backgroundColor: action.payload,
          },
        },
      };

    case NavEventTypesEnum.navbarLoginButtonStyles.CHANGENAVLOGINBUTTONHOVERCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          loginButtonStyles: {
            ...state.styles.loginButtonStyles,
            hoverColor: action.payload,
          },
        },
      };

    case NavEventTypesEnum.navbarLoginButtonStyles.CHANGENAVLOGINBUTTONFONTSTYLE:
      return {
        ...state,
        styles: {
          ...state.styles,
          loginButtonStyles: {
            ...state.styles.loginButtonStyles,
            fontStyle: action.payload,
            fontWeight:
              navbarInitialLoginButtonStylesState.styles.loginButtonStyles
                .fontWeight,
          },
        },
      };

    case NavEventTypesEnum.navbarLoginButtonStyles.CHANGENAVLOGINBUTTONFONTWEIGHT:
      return {
        ...state,
        styles: {
          ...state.styles,
          loginButtonStyles: {
            ...state.styles.loginButtonStyles,
            fontWeight: action.payload,
            fontStyle:
              navbarInitialLoginButtonStylesState.styles.loginButtonStyles
                .fontStyle,
          },
        },
      };
    case CommonEventTypeEnum.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          loginButtonStyles: action.payload.styles.loginButtonStyles,
        },
      };
  }
};
