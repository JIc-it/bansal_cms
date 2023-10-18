import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import logoFull from "./logo-full.png";
import { useLocation, Routes, Route } from 'react-router-dom'; // Import useLocation from react-router-dom
import "./App.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from "./components/common/navbar";
import Dashboard from "./components/dashboard";
import OrderRequests from "./components/requestOrders";
import LeadRequests from "./components/requestLeads";
import OrderPoints from "./components/pointsOrders";
import LeadPoints from "./components/pointsLeads";
import RewardProducts from "./components/rewardProducts";
import Contractor from "./components/contactor";
import Distributors from "./components/distributor";
import Engineers from "./components/engineers";
import Architects from "./components/architects";
import SalesPocs from "./components/salesPocs";
import Admins from "./components/admins";
import Promotions from "./components/promotions";
import Redemptions from "./components/rewardRedemptions";
import ContractorDetails from "./components/contractorDashboard";
// import DistributorDetails from "./components/distributorDashboard";
import ArchitectDetails from "./components/architectDashboard";
import EngineerDetails from "./components/engineerDashboard";
import SalesPocDetails from "./components/salespocDashboard";
import AdminDetails from "./components/adminDashboard";
import DistributorDetails from "./components/distributorDashboard";
import PromotionsHistory from "./components/promotionsHistory";
import Profile from "./components/profile";
import AxiosCRUDComponent from "./components/contractorAxios";

function App() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  
  const location = useLocation(); // Get the current location from react-router-dom

  const toggle = () => {
    toggleSidebar();
  };

  const isMenuItemActive = (menuItemPath) => {
    return location.pathname.includes(menuItemPath);
  };

  return (
    <div id="app" style={{ display: "flex", flexDirection: "column", marginTop:"60px" }}>
        {/* Fixed Navbar */}
        <Navbar />

        <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar
          backgroundColor="black"
          rtl={false}
          style={{
          position: 'fixed', // Make the sidebar fixed
          top: 0, // Stick it to the top
          bottom: 0, // Extend it to the bottom
          width: '240px', // Set the desired width
          color: 'white',
          marginTop:"70px"
          }}
        >
        {/* Centered Logo */}
        {/* <div className="centered-logo">
          <img
            src={logoFull}
            alt="Logo"
            style={{ width: "60px", height: "40px" }}
          />
        </div> */}

        <Menu>
          {/* Dashboard */}
          <MenuItem
            className={`menu-item ${isMenuItemActive("/dashboard") ? "active" : ""}`}
            onClick={() => toggle()}
            style={{
              backgroundColor: isMenuItemActive("/dashboard") ? "#B22222" : "transparent",
              color: isMenuItemActive("/dashboard") ? "white" : "inherit"
            }}
          >
            <Link to="/dashboard" style={{ color:"white" }}> {/* Link to your dashboard page */}
              <DashboardOutlinedIcon style={{ marginLeft: 9 }} /> Dashboard
            </Link>
          </MenuItem>

          {/* Requests */}
          <SubMenu icon={<AssignmentOutlinedIcon />} label="Requests" style={{ background:'black' }}>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/orderrequests") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/orderrequests") ? "#B22222" : "black",
                color: isMenuItemActive("/orderrequests") ? "white" : "inherit"
              }}
            >
              <Link to="/orderrequests" style={{ color:"white" }}>Orders</Link>
            </MenuItem>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/leadrequests") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/leadrequests") ? "#B22222" : "black",
                color: isMenuItemActive("/leadrequests") ? "white" : "inherit"
              }}
            >
              <Link to="/leadrequests" style={{color:"white"}}>Leads</Link>
            </MenuItem>
          </SubMenu>

          {/* Points */}
          <SubMenu icon={<AccountCircleOutlinedIcon />} label="Points" style={{ background:'black' }}>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/orderpoints") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/orderpoints") ? "#B22222" : "black",
                color: isMenuItemActive("/orderpoints") ? "white" : "inherit"
              }}
            >
              <Link to="/orderpoints" style={{color:"white"}}>Orders</Link>
            </MenuItem>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/leadpoints") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/leadpoints") ? "#B22222" : "black",
                color: isMenuItemActive("/leadpoints") ? "white" : "inherit"
              }}
            >
              <Link to="/leadpoints" style={{color:"white"}}>Leads</Link>
            </MenuItem>
          </SubMenu>

          {/* Rewards */}
          <SubMenu icon={<RedeemOutlinedIcon />} label="Rewards" style={{ background:'black' }}>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/rewardproducts") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/rewardproducts") ? "#B22222" : "black",
                color: isMenuItemActive("/rewardproducts") ? "white" : "inherit"
              }}
            >
              <Link to="/rewardproducts" style={{color:"white"}}>Reward Products</Link>
            </MenuItem>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/redemptions") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/redemptions") ? "#B22222" : "black",
                color: isMenuItemActive("/redemptions") ? "white" : "inherit"
              }}
            >
              <Link to="/redemptions" style={{color:"white"}}>Redemptions</Link>
            </MenuItem>
          </SubMenu>

          {/* Users */}
          <SubMenu icon={<PeopleOutlinedIcon />} label="Users" style={{ background:'black' }}>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/contractors") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/contractors") ? "#B22222" : "black",
                color: isMenuItemActive("/contractors") ? "white" : "inherit"
              }}
            >
              <Link to="/contractors" style={{color:"white"}}>Contractors</Link>
            </MenuItem>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/distributors") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/distributors") ? "#B22222" : "black",
                color: isMenuItemActive("/distributors") ? "white" : "inherit"
              }}
            >
              <Link to="/distributors" style={{color:"white"}}>Distributors</Link>
            </MenuItem>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/engineers") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/engineers") ? "#B22222" : "black",
                color: isMenuItemActive("/engineers") ? "white" : "inherit"
              }}
            >
              <Link to="/engineers" style={{color:"white"}}>Engineers</Link>
            </MenuItem>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/architects") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/architects") ? "#B22222" : "black",
                color: isMenuItemActive("/architects") ? "white" : "inherit"
              }}
            >
              <Link to="/architects" style={{color:"white"}}>Architects</Link>
            </MenuItem>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/salespocs") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/salespocs") ? "#B22222" : "black",
                color: isMenuItemActive("/salespocs") ? "white" : "inherit"
              }}
            >
              <Link to="/salespocs" style={{color:"white"}}>Sales Poc's</Link>
            </MenuItem>
            <MenuItem
              className={`menu-item ${isMenuItemActive("/admins") ? "active" : ""}`}
              onClick={() => toggle()}
              style={{
                backgroundColor: isMenuItemActive("/admins") ? "#B22222" : "black",
                color: isMenuItemActive("/admins") ? "white" : "inherit"
              }}
            >
              <Link to="/admins" style={{color:"white"}}>Admins</Link>
            </MenuItem>
          </SubMenu>

          {/* Promotions */}
          <MenuItem
            icon={<CalendarTodayOutlinedIcon />}
            className={`menu-item ${isMenuItemActive("/promotions") ? "active" : ""}`}
            onClick={() => toggle()}
            style={{
              backgroundColor: isMenuItemActive("/promotions") ? "#B22222" : "transparent",
              color: isMenuItemActive("/promotions") ? "white" : "inherit"
            }}
          >
            <Link to="/promotions" style={{ color:"white" }}>Promotions</Link>
          </MenuItem>
          <MenuItem
            icon={<HelpOutlinedIcon />}
            className={`menu-item ${isMenuItemActive("/help") ? "active" : ""}`}
            onClick={() => toggle()}
            style={{
              backgroundColor: isMenuItemActive("/help") ? "#B22222" : "transparent",
              color: isMenuItemActive("/help") ? "white" : "inherit",
              marginTop: "20px",
              marginLeft: "10px"
            }}
          >
            <Link to="/help" style={{ color:"white" }}>Help</Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <main>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orderrequests" element={<OrderRequests />} />
        <Route path="/leadrequests" element={<LeadRequests />} />
        <Route path="/orderpoints" element={<OrderPoints />} />
        <Route path="/leadpoints" element={<LeadPoints />} />
        <Route path="/rewardproducts" element={<RewardProducts />} />
        <Route path="/contractors" element={<Contractor />} />
        <Route path="/distributors" element={<Distributors />} />
        <Route path="/engineers" element={<Engineers />} />
        <Route path="/architects" element={<Architects />} />
        <Route path="/salespocs" element={<SalesPocs />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/redemptions" element={<Redemptions />} />
        <Route path="/ctrdetails" element={<ContractorDetails />} />
        <Route path="/actdetails" element={<ArchitectDetails />} />
        <Route path="/enggdetails" element={<EngineerDetails />} />
        <Route path="/pocdetails" element={<SalesPocDetails />} />
        <Route path="/admdetails" element={<AdminDetails />} />
        <Route path="/dtrdetails" element={<DistributorDetails />} />
        <Route path="/promotionhistory" element={<PromotionsHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/axios" element={<AxiosCRUDComponent />} />
      </Routes>
      </main>
    </div>
    </div>
  );
}

export default App;
