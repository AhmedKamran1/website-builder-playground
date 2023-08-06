import React from "react";

import { useSelector } from "react-redux";

import {
  commonEventType,
  navEventTypes,
} from "@/helpers/constants/event-types/event-types";

import { Checkbox, Divider } from "@mui/material";

import { selectedComponentData } from "@/store/ComponentSlice";
import {
  initialNavbarComponentStyles,
  navLink,
} from "@/helpers/pre-defined-components-styles/navbar-styles";
import { navbar } from "@/helpers/constants/component-child-lengths/component-child-lengths";

import NavbarPallete1 from "./navbar-pallete-type-1/Navbar-Pallete-Type-1";
import NavbarPallete2 from "./navbar-pallete-type-2/Navbar-Pallete-Type-2";

import CommonPallete from "../../common-palletes/CollorPallete";
import HoverColorPallete from "../../common-palletes/HoverColorPallete";
import FontPallete from "../../common-palletes/FontPallete";
import NavbarLinks from "./common-navbar-palletes/NavbarLinks";
import NavbarDropDownLinks from "./common-navbar-palletes/NavbarDropDownLinks";

import useDebouncedDispatch from "@/hooks/use-debounce";

const NavbarPallete = ({ state, dispatch }) => {
  const selectedComponent = useSelector(selectedComponentData);
  const navLinksLength = state.extraFunctionalities.links.length;

  const { navLinkStyles } = state.styles;
  const { loginButtonStyles } = state.styles;


  const debounceDispatchNavActions = useDebouncedDispatch(
    dispatch,
    200
  );

  return (
    <>
      {selectedComponent.navId === initialNavbarComponentStyles[0].navId && (
        <NavbarPallete1
          state={state.extraFunctionalities}
          dispatch={dispatch}
        />
      )}
      <Divider />
      {/* NAVBAR LOGIN BUTTON PALLETE */}
      <strong>Pallete for login button</strong>
      <CommonPallete
        state={loginButtonStyles}
        dispatch={debounceDispatchNavActions}
        changeColor={navEventTypes.CHANGENAVLOGINBUTTONCOLOR}
        changeBackgroundColor={navEventTypes.CHANGENAVLOGINBUTTONBGCOLOR}
      />
      <HoverColorPallete
        state={loginButtonStyles}
        dispatch={debounceDispatchNavActions}
        changeHoverColor={navEventTypes.CHANGENAVLOGINBUTTONHOVERCOLOR}
      />
      <FontPallete
        state={loginButtonStyles}
        dispatch={debounceDispatchNavActions}
        changeFontWeight={navEventTypes.CHANGENAVLOGINBUTTONFONTWEIGHT}
        changeFontStyle={navEventTypes.CHANGENAVLOGINBUTTONFONTSTYLE}
        fontPalleteName="loginButtonStyles"
      />
      <Divider />

      {/* NAVBAR PALLETE */}
      <strong>Pallete for navbar</strong>
      <CommonPallete
        state={navLinkStyles}
        dispatch={debounceDispatchNavActions}
        changeColor={commonEventType.CHANGECOLOR}
        changeBackgroundColor={commonEventType.CHANGEBGCOLOR}
      />
      <FontPallete
        state={navLinkStyles}
        dispatch={debounceDispatchNavActions}
        changeFontWeight={navEventTypes.CHANGENAVFONTWEIGHT}
        changeFontStyle={navEventTypes.CHANGENAVFONTSTYLE}
        fontPalleteName="navLinkStyles"
      />
      <HoverColorPallete
        state={navLinkStyles}
        dispatch={debounceDispatchNavActions}
        changeHoverColor={navEventTypes.CHANGENAVHOVERCOLOR}
      />
      {state.extraFunctionalities.links.map((link, linkIndex) => (
        <React.Fragment key={linkIndex}>
          <NavbarLinks link={link} linkIndex={linkIndex} dispatch={dispatch} />
          {/* {selectedComponent.navId ===
                  initialNavbarComponentStyles[1].navId &&
                  !link.showDropDown && (
                    <NavbarPallete2
                      link={link}
                      linkIndex={linkIndex}
                      dispatch={dispatch}
                    />
                  )} */}
          <p style={{ fontWeight: "bold" }}>
            Drop Down Menu
            <Checkbox
              checked={link.showDropDown}
              onChange={() =>
                dispatch({
                  type: navEventTypes.CHANGEDROPDOWNVISIBILITY,
                  payload: {
                    linkIndex: linkIndex,
                  },
                })
              }
            />
          </p>
          {link.showDropDown &&
            link.dropDown.map((sublink, sublinkIndex) => (
              <NavbarDropDownLinks
                key={sublinkIndex}
                link={link}
                linkIndex={linkIndex}
                sublink={sublink}
                sublinkIndex={sublinkIndex}
                dispatch={dispatch}
              />
            ))}
          <Divider />
        </React.Fragment>
      ))}
      {navLinksLength !== navbar.navLinkLimit && (
        <button
          onClick={() =>
            dispatch({
              type: navEventTypes.ADDNAVLINK,
              payload: {
                navLink: navLink,
              },
            })
          }
        >
          Add Page
        </button>
      )}
    </>
  );
};

export default NavbarPallete;
