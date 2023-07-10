import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import * as NavStyles from "../../styles/navbar/SideBar";

const SideBar = () => {
  return (
    <NavStyles.SideBarGridContainer container item xs={2}>
      <TopBar />
      <BottomBar />
    </NavStyles.SideBarGridContainer>
  );
};

export default SideBar;
