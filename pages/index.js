import EditArea from "@/components/EditArea";
import SideBar from "@/components/navbar/SideBar";
import ComponentProvider from "@/store/ComponentProvider";
import { Container } from "@/styles/Index.styles";

function HomePage() {
  return (
    <ComponentProvider>
      <Container>
        <EditArea />
        <SideBar />
      </Container>
    </ComponentProvider>
  );
}

export default HomePage;
