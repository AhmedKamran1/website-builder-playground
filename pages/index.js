import { getComponents } from "@/store/ComponentActions";
import { componentData } from "@/store/ComponentSlice";
import { componentActions } from "@/store/store";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const router = useRouter();

  const allComponentData = useSelector(componentData);
  const dispatch = useDispatch();

  const pageSelectionHandler = (pageName) => {
    dispatch(componentActions.resetComponents());
    dispatch(getComponents(pageName)).then(() => {
      router.push("/editing-area");
    });
  };

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
