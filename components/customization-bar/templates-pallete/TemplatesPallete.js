import * as TempStyles from "../../../styles/customization-bar/TopBar";


import { useDispatch, useSelector } from "react-redux";

import { ComponentEnum } from "@/helpers/constants/component-types/component-types";


import { initialNavbarComponentStyles } from "@/helpers/pre-defined-components-styles/navbar-styles";
import { initialSectionComponentStyles } from "@/helpers/pre-defined-components-styles/section-styles";

import { addComponent, addNavbarComponent } from "@/store/ComponentActions";
import { saveStatus } from "@/store/ComponentSlice";

const TopBar = () => {
  const dispatch = useDispatch();
  const status = useSelector(saveStatus);

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
          <option value="2">Heading and Paragraph</option>
          <option value="3">Grid Images with description</option>
          <option value="4">Site Banner</option>
          <option value="5">Grid Services Text Cards</option>
          <option value="6">Grid Services Image With Text Cards</option>
        </select>
      </div>
      <h3>{status}</h3>
    </TempStyles.TopBarGridContainer>
  );
};

export default TopBar;
