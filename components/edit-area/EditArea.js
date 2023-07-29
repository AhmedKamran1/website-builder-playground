import React from "react";
import Link from "next/link";

import { component } from "@/helpers/constants/component-types/component-types";

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

  const componentSelectionHandler = (componentData) => {
    dispatch(
      componentActions.selectedComponent({
        componentData,
      })
    );
  };

  const renderComponent = (componentData, styles, extraFunctionalities) => {
    const isFocused = selectedComponentId === componentData.id;
    switch (componentData.componentType) {
      case component.BUTTON:
        return (
          // <Link href={extraFunctionalities.redirectLink ?? ""}>
          <Styled.StyledButton
            variant="contained"
            {...styles}
            onClick={() => componentSelectionHandler(componentData)}
            isfocused={+isFocused}
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
    <EditAreaStyles.EditAreaContainer item xs={10}>
      {/* <button style={{ marginBottom: "5rem" }} onClick={componentPostHandler}>
        Post
      </button>
      <br /> */}
      {components.map((data, index) => (
        <React.Fragment key={index}>
          {renderComponent(
            data,
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
