import { ComponentEnum } from "@/helpers/constants/component-types/component-types";
import { initialNavbarComponentStyles } from "@/helpers/pre-defined-components-styles/navbar-styles";
import { addNavbarComponent, getComponents } from "@/store/ComponentActions";
import { componentData } from "@/store/ComponentSlice";
import { componentActions } from "@/store/store";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const router = useRouter();

  const allComponentData = useSelector(componentData);
  const dispatch = useDispatch();

  const pageSelectionHandler = (pageName) => {
    dispatch(componentActions.resetComponents());
    dispatch(getComponents(pageName)).then(() => {
      router.push("/editing-area", null, { shallow: true });
    });
  };

  useEffect(() => {
    dispatch(
      addNavbarComponent({
        componentType: ComponentEnum.NAVBAR,
        navId: initialNavbarComponentStyles[0].navId,
        styles: structuredClone(initialNavbarComponentStyles[0].styles),
        extraFunctionalities: structuredClone(
          initialNavbarComponentStyles[0].extraFunctionalities
        ),
      })
    );
  }, []);

  return (
    <Container>
      {allComponentData.navbarComponent?.extraFunctionalities?.links.map(
        (link, index) => (
          <div key={index}>
            <span>{link.innerText}</span>
            <button onClick={() => pageSelectionHandler(link.innerText)}>
              Edit Page
            </button>
          </div>
        )
      )}
    </Container>
  );
}

export default HomePage;
