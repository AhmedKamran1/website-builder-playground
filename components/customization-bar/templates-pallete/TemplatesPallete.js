import * as TempStyles from "../../../styles/customization-bar/TopBar";
import * as ButtonStyles from "../../../styles/pre-defined-components/button/button";

import { useDispatch } from "react-redux";
import { componentActions } from "@/store/store";

import { component } from "@/helpers/constants/component-types/component-types";

import { initialButtonComponentStyles } from "@/helpers/pre-defined-components-styles/button-styles";
import { initialNavbarComponentStyles } from "@/helpers/pre-defined-components-styles/navbar-styles";
import { initialSectionComponentStyles } from "@/helpers/pre-defined-components-styles/section-styles";

const TopBar = () => {
  const dispatch = useDispatch();

  const addComponentHandler = (
    event,
    styles,
    extraFunctionalities,
    componentType
  ) => {
    switch (componentType) {
      case component.BUTTON:
        dispatch(
          componentActions.addComponent({
            componentType: component.BUTTON,
            styles: styles,
            extraFunctionalities: extraFunctionalities,
          })
        );
        break;
      case component.NAVBAR:
        dispatch(
          componentActions.addComponent({
            componentType: component.NAVBAR,
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
        break;
      case component.SECTION:
        dispatch(
          componentActions.addComponent({
            componentType: component.SECTION,
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
              component.BUTTON
            )
          }
        >
          button
        </ButtonStyles.StyledButton>
      ))}
      <div>
        <span>Navbar Types:</span>
        <select
          defaultValue="none"
          onChange={(event) =>
            addComponentHandler(event, null, null, component.NAVBAR)
          }
        >
          <option value="none" disabled hidden>
            Select an Option
          </option>
          <option value="1">Nav with Title and logo</option>
          <option value="2">Simple Nav</option>
        </select>
      </div>
      <div>
        <span>Section Types:</span>
        <select
          defaultValue="none"
          onChange={(event) =>
            addComponentHandler(event, null, null, component.SECTION)
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
