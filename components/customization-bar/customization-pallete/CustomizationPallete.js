import { useCallback, useEffect, useReducer, useState } from "react";

import { component } from "@/util/component-type";
import {
  buttonEventType,
  commonEventType,
  navEventTypes,
} from "@/util/event-types";

import * as NavStyles from "../../../styles/customization-bar/BottomBar";

import { useDispatch, useSelector } from "react-redux";
import {
  componentType,
  selectedComponentData,
} from "@/store/ComponentSlice";
import { componentActions } from "@/store/store";

import CommonPallete from "./common-pallete/CommonPallete";
import ButtonPallete from "./specific-pallete/ButtonPallete";

import GoogleFontLoader from "react-google-font-loader";
import NavbarPallete from "./specific-pallete/navbar-palletes/NavbarPallete";

const commonInitialState = {
  color: "#FFFFFF",
  backgroundColor: "#FFFFFF",
};

const buttonInitialState = {
  redirectLink: "",
  fontWeight: "",
  fontStyle: "",
  fontFamily: "",
  hoverColor: "#FFFFFF",
  innerText: "",
};

const navbarInitialState = {
  title: "",
  logo: "",
  links: [
    {
      redirectLink: "",
      innerText: "",
      icon: "",
      showLink: true,
      showDropDown: false,
      dropDown: [
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: true,
        },
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: false,
        },
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: false,
        },
      ],
    },
    {
      redirectLink: "",
      innerText: "",
      icon: "",
      showLink: false,
      showDropDown: false,
      dropDown: [
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: true,
        },
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: false,
        },
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: false,
        },
      ],
    },
    {
      redirectLink: "",
      innerText: "",
      icon: "",
      showLink: false,
      showDropDown: false,
      dropDown: [
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: true,
        },
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: false,
        },
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: false,
        },
      ],
    },
    {
      redirectLink: "",
      innerText: "",
      icon: "",
      showLink: false,
      showDropDown: false,
      dropDown: [
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: true,
        },
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: false,
        },
        {
          dropDownRedirectLink: "",
          dropDownInnerText: "",
          showDropDownLink: false,
        },
      ],
    },
  ],
};

const commonReducer = (state, action) => {
  switch (action.type) {
    case commonEventType.CHANGECOLOR:
      return { ...state, color: action.payload };
    case commonEventType.CHANGEBGCOLOR:
      return { ...state, backgroundColor: action.payload };
    case commonEventType.SETINITIALSTATE:
      return {
        ...state,
        color: action.payload.color,
        backgroundColor: action.payload.bgColor,
      };
  }
};

const buttonReducer = (state, action) => {
  switch (action.type) {
    case buttonEventType.CHANGEREDIRECTLINK:
      return { ...state, redirectLink: action.payload };
    case buttonEventType.CHANGEFONTWEIGHT:
      return {
        ...state,
        fontWeight: action.payload,
        fontStyle: buttonInitialState.fontStyle,
      };
    case buttonEventType.CHANGEFONTSTYLE:
      return {
        ...state,
        fontStyle: action.payload,
        fontWeight: buttonInitialState.fontWeight,
      };

    case buttonEventType.CHANGEFONTFAMILY:
      return {
        ...state,
        fontFamily: action.payload,
      };
    case buttonEventType.CHANGEHOVERCOLOR:
      return { ...state, hoverColor: action.payload };
    case buttonEventType.CHANGEINNERTEXT:
      return { ...state, innerText: action.payload };

    case buttonEventType.SETINITIALSTATE:
      return {
        ...state,
        fontWeight: action.payload.fontWeight,
        fontStyle: action.payload.fontStyle,
        fontFamily: action.payload.fontFamily,
        hoverColor: action.payload.hoverColor,
        redirectLink: action.payload.redirectLink,
        innerText: action.payload.innerText,
      };
    default:
      return state;
  }
};

const navReducer = (state, action) => {
  let linkIndex,
    dropDownIndex,
    dropDownInnerText,
    dropDownRedirectLink,
    innerText,
    redirectLink,
    icon,
    updatedLinks;

  switch (action.type) {
    case navEventTypes.CHANGENAVINNERTEXT:
      ({ linkIndex, innerText } = action.payload);
      updatedLinks = structuredClone(state.links);
      updatedLinks[linkIndex].innerText = innerText;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVLINK:
      ({ linkIndex, redirectLink } = action.payload);
      updatedLinks = structuredClone(state.links);
      updatedLinks[linkIndex].redirectLink = redirectLink;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVLINKICON:
      ({ linkIndex, icon } = action.payload);
      updatedLinks = structuredClone(state.links);
      updatedLinks[linkIndex].icon = icon;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVLINKVISIBILITY:
      ({ linkIndex } = action.payload);
      updatedLinks = structuredClone(state.links);
      updatedLinks[linkIndex].showLink = !updatedLinks[linkIndex].showLink;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVDROPDOWNINNERTEXT:
      ({ linkIndex, dropDownIndex, dropDownInnerText } = action.payload);
      updatedLinks = structuredClone(state.links);
      updatedLinks[linkIndex].dropDown[dropDownIndex].dropDownInnerText =
        dropDownInnerText;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVDROPDOWNLINK:
      ({ linkIndex, dropDownIndex, dropDownRedirectLink } = action.payload);
      updatedLinks = structuredClone(state.links);
      updatedLinks[linkIndex].dropDown[dropDownIndex].dropDownRedirectLink =
        dropDownRedirectLink;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGEDROPDOWNVISIBILITY:
      ({ linkIndex } = action.payload);
      updatedLinks = structuredClone(state.links);
      updatedLinks[linkIndex].showDropDown =
        !updatedLinks[linkIndex].showDropDown;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGEDROPDOWNLINKVISIBILITY:
      ({ linkIndex, dropDownIndex } = action.payload);
      updatedLinks = structuredClone(state.links);
      updatedLinks[linkIndex].dropDown[dropDownIndex].showDropDownLink =
        !updatedLinks[linkIndex].dropDown[dropDownIndex].showDropDownLink;
      return { ...state, links: updatedLinks };

    case navEventTypes.CHANGENAVTITLE:
      return { ...state, title: action.payload };

    case navEventTypes.CHANGENAVLOGO:
      return { ...state, logo: action.payload };

    case navEventTypes.SETINITIALNAVSTATE:
      return {
        ...state,
        title: action.payload.title,
        logo: action.payload.logo,
        links: action.payload.links,
      };
    default:
      return state;
  }
};

const BottomBar = () => {
  const selectedComponentType = useSelector(componentType);
  const selectedComponent = useSelector(selectedComponentData);
  const dispatchStore = useDispatch();

  // const [isUpdating, setIsUpdating] = useState(false);
  const [fontTypes, setFontTypes] = useState([]);
  const [commonState, dispatchCommonActions] = useReducer(
    commonReducer,
    commonInitialState
  );
  const [navState, dispatchNavActions] = useReducer(
    navReducer,
    navbarInitialState
  );
  const [buttonState, dispatchButtonActions] = useReducer(
    buttonReducer,
    buttonInitialState
  );

  const updateStyleHandler = useCallback(() => {
    let modifiedStyles;
    let extraFunctionalities;
    if (selectedComponentType === component.BUTTON) {
      modifiedStyles = {
        colorhex: commonState.color,
        backgroundcolor: commonState.backgroundColor,
        fontweight: buttonState.fontWeight,
        fontstyle: buttonState.fontStyle,
        fontfamily: buttonState.fontFamily,
        hovercolor: buttonState.hoverColor,
      };
      extraFunctionalities = {
        redirectLink: buttonState.redirectLink,
        innerText: buttonState.innerText,
      };
    }
    if (selectedComponentType === component.NAVBAR) {
      modifiedStyles = {
        colorhex: commonState.color,
        backgroundcolor: commonState.backgroundColor,
      };
      extraFunctionalities = {
        title: navState.title,
        logo: navState.logo,
        links: navState.links,
      };
    }
    dispatchStore(
      componentActions.updateComponent({ modifiedStyles, extraFunctionalities })
    );
  }, [commonState, buttonState, navState]);

  // useEffect(() => {
  //   const fetchFontsData = async () => {
  //     const response = await fetch(
  //       "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAsxy6OklUuxBjHnNlcdkhfvDEBsm3IEes"
  //     );
  //     const data = await response.json();
  //     setFontTypes(data.items.slice(0, 30));
  //   };
  //   fetchFontsData();
  // }, []);

  const fonts = fontTypes.map((font) => ({ font: font.family }));

  useEffect(() => {
    if (selectedComponent?.id) {
      dispatchCommonActions({
        type: commonEventType.SETINITIALSTATE,
        payload: {
          color: selectedComponent.styles.colorhex,
          bgColor: selectedComponent.styles.backgroundcolor,
        },
      });
      if (selectedComponentType === component.BUTTON) {
        dispatchButtonActions({
          type: buttonEventType.SETINITIALSTATE,
          payload: {
            fontWeight: selectedComponent.styles.fontweight,
            fontStyle: selectedComponent.styles.fontstyle,
            fontFamily: selectedComponent.styles.fontfamily,
            hoverColor: selectedComponent.styles.hovercolor,
            redirectLink: selectedComponent.extraFunctionalities.redirectLink,
            innerText: selectedComponent.extraFunctionalities.innerText,
          },
        });
      } else if (selectedComponentType === component.NAVBAR) {
        dispatchNavActions({
          type: navEventTypes.SETINITIALNAVSTATE,
          payload: {
            title: selectedComponent.extraFunctionalities.title,
            logo: selectedComponent.extraFunctionalities.logo,
            links: selectedComponent.extraFunctionalities.links,
          },
        });
      }
    }
  }, [selectedComponent?.id, selectedComponent?.navId]);

  useEffect(() => {
    // if (isUpdating) {
    const timeout = setTimeout(() => {
      updateStyleHandler();
    }, 200);

    // setIsUpdating(false);
    return () => {
      clearTimeout(timeout);
    };
    // }
  }, [commonState, navState, buttonState]);

  return (
    <NavStyles.BottomBarGridContainer
      sx={{ overflowY: "scroll" }}
      item
      xs={12}
      // onChange={() => setIsUpdating(true)}
    >
      {/* {fonts.length && <GoogleFontLoader fonts={fonts} />} */}
      {selectedComponent?.id && (
        <CommonPallete state={commonState} dispatch={dispatchCommonActions} />
      )}
      {selectedComponentType === component.BUTTON && (
        <ButtonPallete
          fonts={fonts}
          state={buttonState}
          dispatch={dispatchButtonActions}
        />
      )}
      {selectedComponentType === component.NAVBAR && (
        <NavbarPallete state={navState} dispatch={dispatchNavActions} />
      )}
    </NavStyles.BottomBarGridContainer>
  );
};

export default BottomBar;
