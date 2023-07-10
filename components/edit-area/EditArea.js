import React, { useContext } from "react";
import Link from "next/link";

import ComponentContext from "@/store/component-context";
import { component } from "@/util/component-type";

import * as EditAreaStyles from "../../styles/edit-area/EditArea";
import * as Styled from "../../styles/button/button";
import { Div } from "@/styles/Component.styles";


const EditArea = () => {
  const componentCtx = useContext(ComponentContext);

  const componentSelectionHandler = (id) => {
    componentCtx.selectedComponent(id);
  };

  const renderComponent = (
    componentData,
    componentType,
    styles,
    extraFunctionalities,
    id
  ) => {
    componentData.id = id;
    switch (componentType) {
      case component.div:
        return (
          <Div
            {...styles}
            id={id}
            onClick={() => componentSelectionHandler(id)}
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
              onClick={() => componentSelectionHandler(id)}
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
      {componentCtx.componentData.map((data, index) => (
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
