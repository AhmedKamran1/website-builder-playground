import TopBar from "./templates-pallete/TemplatesPallete";
import BottomBar from "./customization-pallete/CustomizationPallete";

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
