import React from "react";
import Link from "next/link";


import { component } from "@/util/component-type";

import * as EditAreaStyles from "../../styles/edit-area/EditArea";
import * as Styled from "../../styles/button/button";
import { Div } from "@/styles/Component.styles";
import { useDispatch, useSelector } from "react-redux";
import { componentActions } from "@/store/store";
import { componentData } from "@/store/ComponentSlice";

const EditArea = () => {
  
  const components = useSelector(componentData);
  const dispatch = useDispatch();

  const componentSelectionHandler = (componentId, componentType) => {
    // componentCtx.selectedComponent(id);
    dispatch(
      componentActions.selectedComponent({
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
    // componentData.id = id;
    switch (componentType) {
      case component.div:
        return (
          <Div
            {...styles}
            id={id}
            onClick={() => componentSelectionHandler(id, component.div)}
          >
            A div
          </Div>
        );
      case component.button:
        return (
          <Link href={extraFunctionalities.redirectLink ?? ""}>
            <Styled.StyledButton
              variant="contained"
              {...styles}
              id={id}
              onClick={() => componentSelectionHandler(id, component.button)}
            >
              MUI
            </Styled.StyledButton>
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <EditAreaStyles.EditAreaContainer item xs={10}>
      <button style={{ marginBottom: "5rem" }}>Post</button>
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
