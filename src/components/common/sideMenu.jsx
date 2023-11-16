import { React } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    useProSidebar,
} from "react-pro-sidebar";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import { Link } from "react-router-dom";

export default function SideMenu() {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    const location = useLocation(); // Get the current location from react-router-dom
    const toggle = () => { toggleSidebar(); };
    const isMenuItemActive = (menuItemPath) => {
        return location.pathname.includes(menuItemPath);
    };

    return (
        <Sidebar
            backgroundColor="black"
            rtl={false}
            style={{
                position: "fixed", // Make the sidebar fixed
                top: 0, // Stick it to the top
                bottom: 0, // Extend it to the bottom
                width: "240px", // Set the desired width
                color: "white",
                marginTop: "70px",
            }}
        >
            <Menu>
                <MenuItem
                    className={`menu-item ${isMenuItemActive("/dashboard") ? "active" : ""
                        }`}
                    onClick={() => toggle()}
                    style={{
                        backgroundColor: isMenuItemActive("/dashboard")
                            ? "#B22222"
                            : "transparent",
                        color: isMenuItemActive("/dashboard") ? "white" : "inherit",
                    }}
                >
                    <Link to="/dashboard" style={{ color: "white" }}>
                        <DashboardOutlinedIcon style={{ marginLeft: 9 }} /> Dashboard
                    </Link>
                </MenuItem>

                <SubMenu
                    icon={<AssignmentOutlinedIcon />}
                    label="Requests"
                    style={{ background: "black" }}
                >
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/orderrequests") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/orderrequests")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/orderrequests") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/orderrequests" style={{ color: "white" }}>
                            Orders
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/leadrequests") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/leadrequests")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/leadrequests") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/leadrequests" style={{ color: "white" }}>
                            Leads
                        </Link>
                    </MenuItem>
                </SubMenu>

                <SubMenu
                    icon={<AccountCircleOutlinedIcon />}
                    label="Points"
                    style={{ background: "black" }}
                >
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/orderpoints") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/orderpoints")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/orderpoints") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/orderpoints" style={{ color: "white" }}>
                            Orders
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/leadpoints") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/leadpoints")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/leadpoints") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/leadpoints" style={{ color: "white" }}>
                            Leads
                        </Link>
                    </MenuItem>
                </SubMenu>

                <SubMenu
                    icon={<RedeemOutlinedIcon />}
                    label="Rewards"
                    style={{ background: "black" }}
                >
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/rewardproducts") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/rewardproducts")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/rewardproducts") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/rewardproducts" style={{ color: "white" }}>
                            Reward Products
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/redemptions") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/redemptions")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/redemptions") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/redemptions" style={{ color: "white" }}>
                            Redemptions
                        </Link>
                    </MenuItem>
                </SubMenu>

                <SubMenu
                    icon={<PeopleOutlinedIcon />}
                    label="Users"
                    style={{ background: "black" }}
                >
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/contractors") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/contractors")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/contractors") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/contractors" style={{ color: "white" }}>
                            Contractors
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/distributors") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/distributors")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/distributors") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/distributors" style={{ color: "white" }}>
                            Distributors
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/engineers") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/engineers")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/engineers") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/engineers" style={{ color: "white" }}>
                            Engineers
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/architects") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/architects")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/architects") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/architects" style={{ color: "white" }}>
                            Architects
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/salespocs") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/salespocs")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/salespocs") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/salespocs" style={{ color: "white" }}>
                            Sales Poc's
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className={`menu-item ${isMenuItemActive("/admins") ? "active" : ""
                            }`}
                        onClick={() => toggle()}
                        style={{
                            backgroundColor: isMenuItemActive("/admins")
                                ? "#B22222"
                                : "black",
                            color: isMenuItemActive("/admins") ? "white" : "inherit",
                        }}
                    >
                        <Link to="/admins" style={{ color: "white" }}>
                            Admins
                        </Link>
                    </MenuItem>
                </SubMenu>

                <MenuItem
                    icon={<CalendarTodayOutlinedIcon />}
                    className={`menu-item ${isMenuItemActive("/promotions") ? "active" : ""
                        }`}
                    onClick={() => toggle()}
                    style={{
                        backgroundColor: isMenuItemActive("/promotions")
                            ? "#B22222"
                            : "transparent",
                        color: isMenuItemActive("/promotions") ? "white" : "inherit",
                    }}
                >
                    <Link to="/promotions" style={{ color: "white" }}>
                        Promotions
                    </Link>
                </MenuItem>
                <MenuItem
                    icon={<HelpOutlinedIcon />}
                    className={`menu-item ${isMenuItemActive("/faq") ? "active" : ""}`}
                    onClick={() => toggle()}
                    style={{
                        backgroundColor: isMenuItemActive("/faq")
                            ? "#B22222"
                            : "transparent",
                        color: isMenuItemActive("/faq") ? "white" : "inherit",
                        marginTop: "20px",
                        marginLeft: "10px",
                    }}
                >
                    <Link to="/help" style={{ color: "white" }}>
                        Help
                    </Link>
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}
