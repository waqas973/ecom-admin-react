import React, { Fragment, useReducer } from "react";

import {
  DashboardContext,
  dashboardReducer,
  dashboardState,
} from "src/pages/dashboardAdmin/context/DashboardContext";
import AdminLayoutComponent from "src/shared/components/AdminLayoutComponent";
import DashboardCardComponent from "src/pages/dashboardAdmin/components/DashboardCardComponent";
import CustomizeComponent from "src/pages/dashboardAdmin/components/CustomizeComponent";
import TodaySellComponent from "src/pages/dashboardAdmin/components/TodaySellComponent";

const DashboardComponent = () => {
  return (
    <Fragment>
      <DashboardCardComponent />
      <CustomizeComponent />
      <TodaySellComponent />
    </Fragment>
  );
};

const DashboardAdminPages = () => {
  const [data, dispatch] = useReducer(dashboardReducer, dashboardState);

  return (
    <Fragment>
      <DashboardContext.Provider value={{ data, dispatch }}>
        <AdminLayoutComponent>
          <DashboardComponent />
        </AdminLayoutComponent>
      </DashboardContext.Provider>
    </Fragment>
  );
};

export default DashboardAdminPages;
