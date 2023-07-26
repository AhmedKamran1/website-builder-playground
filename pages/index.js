import EditArea from "@/components/edit-area/EditArea";
import Layout from "@/components/layout/Layout";
import SideBar from "@/components/customization-bar/CustomizationBar";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/store";
import { useEffect } from "react";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.loginUser());
  }, []);
  return (
    <Layout>
      <EditArea />
      <SideBar />
    </Layout>
  );
}

export default HomePage;
