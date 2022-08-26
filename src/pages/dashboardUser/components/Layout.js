import React, { Fragment, useEffect, useReducer } from "react";
import FooterComponent from "src/shared/components/FooterComponent";
import NavbarComponent from "src/shared/components/NavbarComponent";
import CartModal from "src/shared/modals/CartModal";
import { fetchData } from "../Action";
import {
  DashboardUserContext,
  dashboardUserReducer,
  dashboardUserState,
} from "../context/DashboardUserContext";
import SidebarComponent from "./SidebarComponent";

const Layout = ({ children }) => {
  const [data, dispatch] = useReducer(dashboardUserReducer, dashboardUserState);

  useEffect(() => {
    fetchData(dispatch);
  }, []);
  return (
    <Fragment>
      <DashboardUserContext.Provider value={{ data, dispatch }}>
        <div className="flex-grow">
          <NavbarComponent />
          <CartModal />
          <div className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mt-24 flex flex-col md:flex-row">
            <SidebarComponent />
            {/* All Children pass from here */}
            {children}
          </div>
        </div>
        <FooterComponent />
      </DashboardUserContext.Provider>
    </Fragment>
  );
};

export default Layout;
