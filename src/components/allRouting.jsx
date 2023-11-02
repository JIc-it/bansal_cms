import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import OrderRequests from "./requests/orders/requestOrders";
import LeadRequests from "./requests/leads/requestLeads";
import OrderPoints from "./points/orders/pointsOrders";
import LeadPoints from "./points/leads/pointsLeads";
import RewardProducts from "./rewards/rewardProducts/rewardProducts";
import Contractor from "./user/Contractor/contactor";
import Distributors from "./user/distributor";
import Engineers from "./user/engineers";
import Architects from "./user/architects";
import SalesPocs from "./user/salesPocs";
import Admins from "./user/admins";
import Promotions from "./promo/promotions";
import Redemptions from "./rewards/redemptions/rewardRedemptions";
import ContractorDetails from "./contractorDashboard";
import ArchitectDetails from "./architectDashboard";
import EngineerDetails from "./engineerDashboard";
import SalesPocDetails from "./salespocDashboard";
// import AdminDetails from "./dashboard/adminDashboard";
import DistributorDetails from "./distributorDashboard";
import PromotionsHistory from "./promo/promotionsHistory";
import Profile from "./profile/profile";
import AxiosCRUDComponent from "./contractorAxios";
import Login from "./auth/login";
import ForgotPassword from "./forgotPassword";
import ViewContractor from "./user/Contractor/ViewContractor";

export default function AllRouting() {
  return (
    <main className="w-100">
      <Routes>
        <Route index element={<Login />} />
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
        {/* <Route path="/admdetails" element={<AdminDetails />} /> */}
        <Route path="/dtrdetails" element={<DistributorDetails />} />
        <Route path="/promotionhistory" element={<PromotionsHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/axios" element={<AxiosCRUDComponent />} />
        <Route path="/viewContractor/:id" element={<ViewContractor />} />
      </Routes>
    </main>
  );
}
