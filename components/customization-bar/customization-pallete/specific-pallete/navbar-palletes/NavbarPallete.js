import React from "react";

import { useSelector } from "react-redux";

import {
  CommonEventTypeEnum,
  NavEventTypesEnum,
} from "@/helpers/constants/event-types/event-types";

import { Divider } from "@mui/material";

import { selectedComponentData } from "@/store/ComponentSlice";
import {
  initialNavbarComponentStyles,
  navLink,
} from "@/helpers/pre-defined-components-styles/navbar-styles";
import { NavbarLengthEnum } from "@/helpers/constants/component-child-lengths/component-child-lengths";

import NavbarPallete1 from "./navbar-pallete-type-1/Navbar-Pallete-Type-1";
import NavbarPallete2 from "./navbar-pallete-type-2/Navbar-Pallete-Type-2";

import CollorPallete from "../../common-palletes/CollorPallete";
import HoverColorPallete from "../../common-palletes/HoverColorPallete";
import FontPallete from "../../common-palletes/FontPallete";
import NavbarLinks from "./common-navbar-palletes/NavbarLinks";

import useDebouncedDispatch from "@/hooks/use-debounce";

import ImagePallete from "../../common-palletes/ImagePallete";
import BgColorPallete from "../../common-palletes/BgColorPallete";
import AddItem from "../../common-palletes/AddItem";
import ChangeImage from "../../common-palletes/ChangeImage";

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
      <div>
        <span>Title</span>
        <input
          type="text"
          value={navFunctionalitiesState.extraFunctionalities.title}
          onChange={(event) =>
            dispatchNavFunctionalitiesActions({
              type: NavEventTypesEnum.navbarFunctionalities.CHANGENAVTITLE,
              payload: event.target.value,
            })
          }
        />
      </div>
      <ChangeImage
        dispatchImageFunctionalities={dispatchNavFunctionalitiesActions}
        changeImage={NavEventTypesEnum.navbarFunctionalities.CHANGENAVLOGO}
      />
      <Divider />
      {/* NAVBAR LOGIN BUTTON PALLETE */}
      <strong>Pallete for login button</strong>
      <CollorPallete
        state={loginButtonStyles}
        dispatch={debounceNavLoginButtonStylesActions}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
      />
      <BgColorPallete
        state={loginButtonStyles}
        dispatch={debounceNavLoginButtonStylesActions}
        changeBackgroundColor={CommonEventTypeEnum.CHANGEBGCOLOR}
      />
      <HoverColorPallete
        state={loginButtonStyles}
        dispatch={debounceNavLoginButtonStylesActions}
        changeHoverColor={
          NavEventTypesEnum.navbarLoginButtonStyles
            .CHANGENAVLOGINBUTTONHOVERCOLOR
        }
      />
      <FontPallete
        state={loginButtonStyles}
        dispatch={debounceNavLoginButtonStylesActions}
        changeFontWeight={
          NavEventTypesEnum.navbarLoginButtonStyles
            .CHANGENAVLOGINBUTTONFONTWEIGHT
        }
        changeFontStyle={
          NavEventTypesEnum.navbarLoginButtonStyles
            .CHANGENAVLOGINBUTTONFONTSTYLE
        }
        fontPalleteName="loginButtonStyles"
      />
      <Divider />

      {/* NAVBAR PALLETE */}
      <strong>Pallete for navbar</strong>
      <CollorPallete
        state={navLinkStyles}
        dispatch={debounceNavStylesActions}
        changeColor={CommonEventTypeEnum.CHANGECOLOR}
      />
      <BgColorPallete
        state={navLinkStyles}
        dispatch={debounceNavStylesActions}
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
            <Divider />
          </React.Fragment>
        )
      )}
      {navLinksLength !== NavbarLengthEnum.NAVLINKLIMIT && (
        <AddItem
          dispatch={dispatchNavFunctionalitiesActions}
          itemType={navLink}
          addItem={NavEventTypesEnum.navbarFunctionalities.ADDNAVLINK}
        >
          Add Page
        </AddItem>
      )}
    </>
  );
};

export default NavbarPallete;
