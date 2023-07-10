import EditArea from "@/components/edit-area/EditArea";
import Layout from "@/components/layout/Layout";
import SideBar from "@/components/navbar/SideBar";

function HomePage() {
  return (
    <Layout>
      <EditArea />
      <SideBar />
    </Layout>
  );
}

export default HomePage;
