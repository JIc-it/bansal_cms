import NavBar from "./navbar";
import SideMenu from "./sidemenu";

const Base = ({ children }) => {
  return (
    <div id="main-wrapper">
      <NavBar />
      {/* <SideMenu /> */}
      <>{children}</>
    </div>
  );
};

export default Base;