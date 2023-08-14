import EditArea from "@/components/edit-area/EditArea";
import Layout from "@/components/layout/Layout";
import SideBar from "@/components/customization-bar/CustomizationBar";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { getComponents } from "@/store/ComponentActions";
import { componentData } from "@/store/ComponentSlice";

function EditingPage() {
  const router = useRouter();
  const allComponentData = useSelector(componentData);
  const pageName = allComponentData.pageName;

  if (!pageName) {
    router.push("/");
    return null;
  }

  return (
    <Layout>
      <EditArea />
      <SideBar />
    </Layout>
  );
}

export default EditingPage;
