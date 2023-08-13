import EditArea from "@/components/edit-area/EditArea";
import Layout from "@/components/layout/Layout";
import SideBar from "@/components/customization-bar/CustomizationBar";
import { useDispatch, useSelector } from "react-redux";
import { componentData } from "@/store/ComponentSlice";

function EditingPage() {
  // const allComponentData = useSelector(componentData);
  // const dispatch = useDispatch();
  // const pageNameExists = allComponentData.pageName;
  // const firstPage =
  //   allComponentData.navbarComponent.extraFunctionalities.links[0].innerText;

  // if (!pageNameExists) {
  //   dispatch(componentActions.resetComponents());
  //   dispatch(getComponents(pageName)).then(() => {
  //     router.push("/editing-area");
  //   });
  // }

  return (
    <Layout>
      <EditArea />
      <SideBar />
    </Layout>
  );
}

export default EditingPage;
