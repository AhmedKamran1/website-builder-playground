import {
  commonEventType,
  buttonEventType,
} from "@/helpers/constants/event-types/event-types";

import { buttonInitialState } from "../initial-reducer-states/initial-button-state";

export const buttonReducer = (state, action) => {
  switch (action.type) {
    case commonEventType.CHANGECOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          colorHex: action.payload,
        },
      };
    case commonEventType.CHANGEBGCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          backgroundColor: action.payload,
        },
      };
    case buttonEventType.CHANGEREDIRECTLINK:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          redirectLink: action.payload,
        },
      };
    case buttonEventType.CHANGEFONTWEIGHT:
      return {
        ...state,
        styles: {
          ...state.styles,
          fontWeight: action.payload,
          fontStyle: buttonInitialState.styles.fontStyle,
        },
      };
    case buttonEventType.CHANGEFONTSTYLE:
      return {
        ...state,
        styles: {
          ...state.styles,
          fontStyle: action.payload,
          fontWeight: buttonInitialState.styles.fontWeight,
        },
      };

    case buttonEventType.CHANGEFONTFAMILY:
      return {
        ...state,
        styles: {
          ...state.styles,
          fontFamily: action.payload,
        },
      };
    case buttonEventType.CHANGEHOVERCOLOR:
      return {
        ...state,
        styles: {
          ...state.styles,
          hoverColor: action.payload,
        },
      };
    case buttonEventType.CHANGEINNERTEXT:
      return {
        ...state,
        extraFunctionalities: {
          ...state.extraFunctionalities,
          innerText: action.payload,
        },
      };

    case commonEventType.SETINITIALSTATE:
      return {
        ...state,
        styles: action.payload.styles,
        extraFunctionalities: action.payload.extraFunctionalities,
      };
    default:
      return state;
  }
};
