import React from "react";
import Navbar from "../components/common/navbar";
import SideMenu from "../components/common/sideMenu";
import AllRouting from "../components/allRouting";
import Footer from "../components/common/footer";
import { getProfileRequest } from "../axiosHandle/profileHandle";
import { useEffect } from "react";
import { useState } from "react";
import { getPermission } from "../axiosHandle/commonServicesHandle";
import { AppContext } from "../contexts/AppContext";

const MainPage = () => {
  const [permissionData, setPermissionData] = useState();

  useEffect(() => {
    getProfileRequest()
      .then((data) => {
        console.log(" getProfileRequest data", data);
        if (data) {
          getPermission(data.id)
            .then((permissionData) => {
              console.log(" permission data", permissionData);
              setPermissionData(permissionData.permission);
            })
            .catch((error) => {
              console.error("Error fetching profile:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  console.log(permissionData, "permissionData");

  return (
    <AppContext.Provider value={{ permissionData }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navbar />
        <SideMenu />
        <AllRouting />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default MainPage;
