import * as TempStyles from "../../../styles/customization-bar/TopBar";
import * as ButtonStyles from "../../../styles/pre-defined-components/button/button";

import { useDispatch } from "react-redux";
import { componentActions } from "@/store/store";

import { ComponentEnum } from "@/helpers/constants/component-types/component-types";

import { initialButtonComponentStyles } from "@/helpers/pre-defined-components-styles/button-styles";
import { initialNavbarComponentStyles } from "@/helpers/pre-defined-components-styles/navbar-styles";
import { initialSectionComponentStyles } from "@/helpers/pre-defined-components-styles/section-styles";

import { addComponent, addNavbarComponent } from "@/store/ComponentActions";

const TopBar = () => {
  const dispatch = useDispatch();

  const addNavbarComponentHandler = (event, styles, extraFunctionalities) => {
    dispatch(
      addNavbarComponent({
        componentType: ComponentEnum.NAVBAR,
        navId: initialNavbarComponentStyles[event.target.value - 1].navId,
        styles: structuredClone(
          initialNavbarComponentStyles[event.target.value - 1].styles
        ),
        extraFunctionalities: structuredClone(
          initialNavbarComponentStyles[event.target.value - 1]
            .extraFunctionalities
        ),
      })
    );
  };

  const addComponentHandler = (
    event,
    styles,
    extraFunctionalities,
    componentType
  ) => {
    switch (componentType) {
      case ComponentEnum.BUTTON:
        dispatch(
          addComponent({
            componentType: ComponentEnum.BUTTON,
            styles: styles,
            extraFunctionalities: extraFunctionalities,
          })
        );
        break;
      case ComponentEnum.SECTION:
        dispatch(
          addComponent({
            componentType: ComponentEnum.SECTION,
            secId: initialSectionComponentStyles[event.target.value - 1].secId,
            styles: structuredClone(
              initialSectionComponentStyles[event.target.value - 1].styles
            ),
            extraFunctionalities: structuredClone(
              initialSectionComponentStyles[event.target.value - 1]
                .extraFunctionalities
            ),
          })
        );
        break;
    }
  };

  return (
    <TempStyles.TopBarGridContainer item xs={12}>
      {/* <button onClick={()=>addComponentHandler}>div</button> */}
      {/* <br /> */}
      {initialButtonComponentStyles.map((button, index) => (
        <ButtonStyles.StyledButton
          variant="contained"
          key={index}
          {...button.styles}
          onClick={(event) =>
            addComponentHandler(
              event,
              button.styles,
              button.extraFunctionalities,
              ComponentEnum.BUTTON
            )
          }
        >
          button
        </ButtonStyles.StyledButton>
      ))}
      <div>
        <span>Navbar Types:</span>
        <select defaultValue="none" onChange={addNavbarComponentHandler}>
          <option value="none" disabled hidden>
            Select an Option
          </option>
          <option value="1">Nav with Title and logo</option>
          <option value="2">Simple Nav with Drawer</option>
        </select>
      </div>
      <div>
        <span>Section Types:</span>
        <select
          defaultValue="none"
          onChange={(event) =>
            addComponentHandler(event, null, null, ComponentEnum.SECTION)
          }
        >
          <option value="none" disabled hidden>
            Select an Option
          </option>
          <option value="1">Image with text</option>
        </select>
      </div>
    </TempStyles.TopBarGridContainer>
  );
};

export default TopBar;
