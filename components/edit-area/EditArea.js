import React from "react";

import { ComponentEnum } from "@/helpers/constants/component-types/component-types";

import * as EditAreaStyles from "../../styles/edit-area/EditArea";
import * as Styled from "../../styles/pre-defined-components/button/button";

import { useDispatch, useSelector } from "react-redux";
import { componentActions } from "@/store/store";
import {
  componentData,
  componentId,
  pageComponents,
} from "@/store/ComponentSlice";

import Navbar from "../navbar/Navbar";

import Section from "../section/Section";

const EditArea = () => {
  const selectedComponentId = useSelector(componentId);
  const allComponentData = useSelector(componentData);
  const components = useSelector(pageComponents);
  const dispatch = useDispatch();

  const componentSelectionHandler = (componentData) => {
    dispatch(
      componentActions.selectedComponent({
        componentData,
      })
    );
  };

  const renderComponent = (componentData, styles, extraFunctionalities) => {
    const isFocused = selectedComponentId === componentData?.id;
    switch (componentData?.componentType) {
      case ComponentEnum.BUTTON:
        return (
          <Styled.StyledButton
            variant="contained"
            {...styles}
            onClick={() => componentSelectionHandler(componentData)}
            isfocused={+isFocused}
          >
            {extraFunctionalities.innerText ?? "Button"}
          </Styled.StyledButton>
        );
      case ComponentEnum.NAVBAR:
        return (
          <Navbar
            styles={styles}
            extraFunctionalities={extraFunctionalities}
            navbarId={componentData.navId}
            componentSelectionHandler={() =>
              componentSelectionHandler(componentData)
            }
            isfocused={+isFocused}
          />
        );
      case ComponentEnum.SECTION:
        return (
          <Section
            styles={styles}
            extraFunctionalities={extraFunctionalities}
            sectionId={componentData.secId}
            componentSelectionHandler={() =>
              componentSelectionHandler(componentData)
            }
            isfocused={+isFocused}
          />
        );
      default:
        return null;
    }
  };

  return (
    <EditAreaStyles.EditAreaContainer item xs={10} sx={{overflowY:"scroll"}}>
      {renderComponent(
        allComponentData.navbarComponent,
        allComponentData.navbarComponent.styles,
        allComponentData.navbarComponent.extraFunctionalities
      )}
      {components.map((data, index) => (
        <React.Fragment key={index}>
          {renderComponent(data, data.styles, data.extraFunctionalities)}
        </React.Fragment>
      ))}
    </EditAreaStyles.EditAreaContainer>
  );
};

export default EditArea;
