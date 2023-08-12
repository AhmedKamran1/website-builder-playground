import React from "react";

import { useSelector } from "react-redux";

import {
  CommonEventTypeEnum,
  NavEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";

import {  Divider } from "@mui/material";

import { selectedComponentData } from "@/store/ComponentSlice";
import {
  initialNavbarComponentStyles,
  navLink,
} from "@/helpers/pre-defined-components-styles/navbar-styles";
import { NavbarLengthEnum } from "@/helpers/constants/component-child-lengths/component-child-lengths";

import NavbarPallete1 from "./navbar-pallete-type-1/Navbar-Pallete-Type-1";
import NavbarPallete2 from "./navbar-pallete-type-2/Navbar-Pallete-Type-2";

import CommonPallete from "../../common-palletes/CollorPallete";
import HoverColorPallete from "../../common-palletes/HoverColorPallete";
import FontPallete from "../../common-palletes/FontPallete";
import NavbarLinks from "./common-navbar-palletes/NavbarLinks";

import useDebouncedDispatch from "@/hooks/use-debounce";

const NavbarPallete = ({
  navFunctionalitiesState,
  navStylesState,
  navLoginButtonStylesState,
  dispatchNavFunctionalitiesActions,
  dispatchNavLoginButtonStylesActions,
  dispatchNavStylesActions,
}) => {
  const selectedComponent = useSelector(selectedComponentData);
  const navLinksLength =
    navFunctionalitiesState.extraFunctionalities.links.length;

  const { navLinkStyles } = navStylesState.styles;
  const { loginButtonStyles } = navLoginButtonStylesState.styles;

  const debounceNavLoginButtonStylesActions = useDebouncedDispatch(
    dispatchNavLoginButtonStylesActions,
    200
  );
  const debounceNavStylesActions = useDebouncedDispatch(
    dispatchNavStylesActions,
    200
  );

  return (
    <>
      {selectedComponent.navId === initialNavbarComponentStyles[0].navId && (
        <NavbarPallete1
          state={navFunctionalitiesState.extraFunctionalities}
          dispatch={dispatchNavFunctionalitiesActions}
        />
      )}
      <Divider />
      {/* NAVBAR LOGIN BUTTON PALLETE */}
      <strong>Pallete for login button</strong>
      <CommonPallete
        state={loginButtonStyles}
        dispatch={debounceNavLoginButtonStylesActions}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
        changeBackgroundColor={CommonEventTypeEnum.CHANGEBGCOLOR}
      />
      <HoverColorPallete
        state={loginButtonStyles}
        dispatch={debounceNavLoginButtonStylesActions}
        changeHoverColor={
          NavEventTypesEnum.navbarLoginButtonStyles.CHANGENAVLOGINBUTTONHOVERCOLOR
        }
      />
      <FontPallete
        state={loginButtonStyles}
        dispatch={debounceNavLoginButtonStylesActions}
        changeFontWeight={
          NavEventTypesEnum.navbarLoginButtonStyles.CHANGENAVLOGINBUTTONFONTWEIGHT
        }
        changeFontStyle={
          NavEventTypesEnum.navbarLoginButtonStyles.CHANGENAVLOGINBUTTONFONTSTYLE
        }
        fontPalleteName="loginButtonStyles"
      />
      <Divider />

      {/* NAVBAR PALLETE */}
      <strong>Pallete for navbar</strong>
      <CommonPallete
        state={navLinkStyles}
        dispatch={debounceNavStylesActions}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
        changeBackgroundColor={CommonEventTypeEnum.CHANGEBGCOLOR}
      />
      <FontPallete
        state={navLinkStyles}
        dispatch={debounceNavStylesActions}
        changeFontWeight={NavEventTypesEnum.navbarStyles.CHANGENAVFONTWEIGHT}
        changeFontStyle={NavEventTypesEnum.navbarStyles.CHANGENAVFONTSTYLE}
        fontPalleteName="navLinkStyles"
      />
      <HoverColorPallete
        state={navLinkStyles}
        dispatch={debounceNavStylesActions}
        changeHoverColor={NavEventTypesEnum.navbarStyles.CHANGENAVHOVERCOLOR}
      />
      {navFunctionalitiesState.extraFunctionalities.links.map(
        (link, linkIndex) => (
          <React.Fragment key={linkIndex}>
            <NavbarLinks
              link={link}
              linkIndex={linkIndex}
              dispatch={dispatchNavFunctionalitiesActions}
            />
            {/* {selectedComponent.navId ===
                  initialNavbarComponentStyles[1].navId &&
                  !link.showDropDown && (
                    <NavbarPallete2
                      link={link}
                      linkIndex={linkIndex}
                      dispatch={dispatch}
                    />
                  )} */}
            <Divider />
          </React.Fragment>
        )
      )}
      {navLinksLength !== NavbarLengthEnum.NAVLINKLIMIT && (
        <button
          onClick={() =>
            dispatchNavFunctionalitiesActions({
              type: NavEventTypesEnum.navbarFunctionalities.ADDNAVLINK,
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
