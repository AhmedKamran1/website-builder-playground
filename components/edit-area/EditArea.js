import React from "react";
import Link from "next/link";

import { component } from "@/util/component-type";

import * as EditAreaStyles from "../../styles/edit-area/EditArea";
import * as Styled from "../../styles/pre-defined-components/button/button";

import { useDispatch, useSelector } from "react-redux";
import { componentActions } from "@/store/store";
import { componentData, componentId } from "@/store/ComponentSlice";
import Navbar from "../navbar/Navbar";

const EditArea = () => {
  const selectedComponentId = useSelector(componentId);
  const components = useSelector(componentData);
  const dispatch = useDispatch();

  const componentPostHandler = () => {
    console.log(components);
  };

  const componentSelectionHandler = (
    componentData,
    componentId,
    componentType
  ) => {
    dispatch(
      componentActions.selectedComponent({
        componentData,
        componentId,
        componentType,
      })
    );
  };

  const renderComponent = (
    componentData,
    componentType,
    styles,
    extraFunctionalities,
    id
  ) => {
    const isFocused = selectedComponentId === id;
    switch (componentType) {
      case component.BUTTON:
        return (
          // <Link href={extraFunctionalities.redirectLink ?? ""}>
          <Styled.StyledButton
            variant="contained"
            {...styles}
            onClick={() =>
              componentSelectionHandler(componentData, id, component.BUTTON)
            }
            isfocused={isFocused}
          >
            {extraFunctionalities.innerText ?? "Button"}
          </Styled.StyledButton>
          // </Link>
        );
      case component.NAVBAR:
        return (
          <Navbar
            styles={styles}
            extraFunctionalities={extraFunctionalities}
            navbarId={componentData.navId}
            componentSelectionHandler={() =>
              componentSelectionHandler(componentData, id, component.NAVBAR)
            }
            isfocused={isFocused}
          />
        );
      default:
        return null;
    }
  };

  return (
    <EditAreaStyles.EditAreaContainer item xs={10}>
      <button style={{ marginBottom: "5rem" }} onClick={componentPostHandler}>
        Post
      </button>
      <br />
      {components.map((data, index) => (
        <React.Fragment key={index}>
          {renderComponent(
            data,
            data.componentType,
            data.styles,
            data.extraFunctionalities,
            index + 1
          )}
        </React.Fragment>
      ))}
    </EditAreaStyles.EditAreaContainer>
  );
};

export default EditArea;
