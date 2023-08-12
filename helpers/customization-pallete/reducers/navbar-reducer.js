import {
  commonEventType,
  navEventTypes,
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

    case navEventTypes.navbarFunctionalities.ADDNAVLINK:
      ({ navLink } = action.payload);

      updatedLinks.push(navLink);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.navbarFunctionalities.DELETENAVLINK:
      ({ linkIndex } = action.payload);
      updatedLinks.splice(linkIndex, 1);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.navbarFunctionalities.CHANGENAVTITLE:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          title: action.payload,
        },
      };

    case navEventTypes.navbarFunctionalities.CHANGENAVLOGO:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          logo: action.payload,
        },
      };

    case navEventTypes.navbarFunctionalities.CHANGENAVINNERTEXT:
      ({ linkIndex, innerText } = action.payload);
      updatedLinks[linkIndex].innerText = innerText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.navbarFunctionalities.CHANGENAVREDIRECTLINK:
      ({ linkIndex, redirectLink } = action.payload);
      updatedLinks[linkIndex].redirectLink = redirectLink;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case commonEventType.SETINITIALSTATE:
      return {
        ...state,
        extraFunctionalities: action.payload.extraFunctionalities,
      };
  }
};

export const navStylesReducer = (state, action) => {
  switch (action.type) {
    //NAVBAR LINK STYLES
    case commonEventType.CHANGECOLOR:
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
    case commonEventType.CHANGEBGCOLOR:
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

    case navEventTypes.navbarStyles.CHANGENAVFONTSTYLE:
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

    case navEventTypes.navbarStyles.CHANGENAVFONTWEIGHT:
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

    case navEventTypes.navbarStyles.CHANGENAVHOVERCOLOR:
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

    case commonEventType.SETINITIALSTATE:
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
    case commonEventType.CHANGECOLOR:
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
    case commonEventType.CHANGEBGCOLOR:
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

    case navEventTypes.navbarLoginButtonStyles.CHANGENAVLOGINBUTTONHOVERCOLOR:
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

    case navEventTypes.navbarLoginButtonStyles.CHANGENAVLOGINBUTTONFONTSTYLE:
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

    case navEventTypes.navbarLoginButtonStyles.CHANGENAVLOGINBUTTONFONTWEIGHT:
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
    case commonEventType.SETINITIALSTATE:
      return {
        ...state,
        styles: {
          ...state.styles,
          loginButtonStyles: action.payload.styles.loginButtonStyles,
        },
      };
  }
};
