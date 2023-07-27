import * as Styled from "../../styles/layout/layout";

const Layout = (props) => {
  return <Styled.GridContainer container>{props.children}</Styled.GridContainer>;
};

export default Layout;
