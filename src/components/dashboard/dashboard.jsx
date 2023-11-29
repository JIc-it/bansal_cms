import React from "react";
import DashboardCountCards from "./countCards";
import DashboardOrderChart from "./numberOrders/orderChart";
import PendingOrderRequests from "./pendingTable/orderRequests";
import TopStartPerformers from "./topStar/topStartPerformers";
import ItemCounts from "./itemCounts";
import ProjectStatus from "./projectStatus";

function Dashboard() {
  return (
    <div className="content-body" style={{ marginLeft: 245, overflowY: 'auto', maxHeight: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 wid-100">
            <div className="row">
              <DashboardCountCards />
              <DashboardOrderChart />
              <PendingOrderRequests />
              <TopStartPerformers />
              <div className="col-xl-6 col-md-6 up-shd" style={{ height: 303 }}>
                <ItemCounts />
                <ProjectStatus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
