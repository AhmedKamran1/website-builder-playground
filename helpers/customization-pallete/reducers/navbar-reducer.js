import {
  commonEventType,
  navEventTypes,
} from "../../constants/event-types/event-types";

import { navbarInitialState } from "../initial-reducer-states/initial-navbar-state";

export const navReducer = (state, action) => {
  let linkIndex,
    navLink,
    dropDownIndex,
    dropDownInnerText,
    dropDownRedirectLink,
    dropDownLink,
    innerText,
    redirectLink,
    updatedLinks;

  updatedLinks = structuredClone(state.extraFunctionalities.links);

  switch (action.type) {
    // FUNCTIONALITIES

    case navEventTypes.ADDNAVLINK:
      ({ navLink } = action.payload);

      updatedLinks.push(navLink);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.DELETENAVLINK:
      ({ linkIndex } = action.payload);
      updatedLinks.splice(linkIndex, 1);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.CHANGENAVTITLE:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          title: action.payload,
        },
      };

    case navEventTypes.CHANGENAVLOGO:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          logo: action.payload,
        },
      };

    case navEventTypes.CHANGENAVINNERTEXT:
      ({ linkIndex, innerText } = action.payload);
      updatedLinks[linkIndex].innerText = innerText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.CHANGENAVREDIRECTLINK:
      ({ linkIndex, redirectLink } = action.payload);
      updatedLinks[linkIndex].redirectLink = redirectLink;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.CHANGEDROPDOWNVISIBILITY:
      ({ linkIndex } = action.payload);
      updatedLinks[linkIndex].showDropDown =
        !updatedLinks[linkIndex].showDropDown;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.ADDROPDOWNLINK:
      ({ linkIndex, dropDownLink } = action.payload);
      updatedLinks[linkIndex].dropDown.push(dropDownLink);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.DELETEDROPDOWNLINK:
      ({ linkIndex, dropDownIndex } = action.payload);
      updatedLinks[linkIndex].dropDown.splice(dropDownIndex, 1);
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.CHANGENAVDROPDOWNINNERTEXT:
      ({ linkIndex, dropDownIndex, dropDownInnerText } = action.payload);
      updatedLinks[linkIndex].dropDown[dropDownIndex].dropDownInnerText =
        dropDownInnerText;
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          links: updatedLinks,
        },
      };

    case navEventTypes.CHANGENAVDROPDOWNLINK:
      ({ linkIndex, dropDownIndex, dropDownRedirectLink } = action.payload);
      updatedLinks[linkIndex].dropDown[dropDownIndex].dropDownRedirectLink =
        dropDownRedirectLink;
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
        styles: action.payload.styles,
        extraFunctionalities: action.payload.extraFunctionalities,
      };

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

    case navEventTypes.CHANGENAVFONTSTYLE:
      return {
        ...state,
        styles: {
          ...state.styles,
          navLinkStyles: {
            ...state.styles.navLinkStyles,
            fontStyle: action.payload,
            fontWeight: navbarInitialState.styles.navLinkStyles.fontWeight,
          },
        },
      };

    case navEventTypes.CHANGENAVFONTWEIGHT:
      return {
        ...state,
        styles: {
          ...state.styles,
          navLinkStyles: {
            ...state.styles.navLinkStyles,
            fontWeight: action.payload,
            fontStyle: navbarInitialState.styles.navLinkStyles.fontStyle,
          },
        },
      };

    case navEventTypes.CHANGENAVHOVERCOLOR:
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

    //NAVBAR LOGIN BUTTON STYLES
    case navEventTypes.CHANGENAVLOGINBUTTONCOLOR:
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
    case navEventTypes.CHANGENAVLOGINBUTTONBGCOLOR:
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

    case navEventTypes.CHANGENAVLOGINBUTTONHOVERCOLOR:
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

    case navEventTypes.CHANGENAVLOGINBUTTONFONTSTYLE:
      return {
        ...state,
        styles: {
          ...state.styles,
          loginButtonStyles: {
            ...state.styles.loginButtonStyles,
            fontStyle: action.payload,
            fontWeight: navbarInitialState.styles.loginButtonStyles.fontWeight,
          },
        },
      };

    case navEventTypes.CHANGENAVLOGINBUTTONFONTWEIGHT:
      return {
        ...state,
        styles: {
          ...state.styles,
          loginButtonStyles: {
            ...state.styles.loginButtonStyles,
            fontWeight: action.payload,
            fontStyle: navbarInitialState.styles.loginButtonStyles.fontStyle,
          },
        },
      };

    default:
      return state;
  }
};
