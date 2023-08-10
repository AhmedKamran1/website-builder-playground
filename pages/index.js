import EditArea from "@/components/edit-area/EditArea";
import Layout from "@/components/layout/Layout";
import SideBar from "@/components/customization-bar/CustomizationBar";

function HomePage() {
  return (
    <Layout>
      <EditArea />
      <SideBar />
    </Layout>
  );
}

export default HomePage;
