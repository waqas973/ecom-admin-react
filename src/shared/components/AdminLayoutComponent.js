import React, { Fragment } from "react";
import AdminNavbarComponent from "src/shared/components/AdminNavbarComponent";
import AdminSidebarComponent from "src/shared/components/AdminSidebarComponent";
import AdminFooterComponent from "src/shared/components/AdminFooterComponent";

const AdminLayoutComponent = ({ children }) => {
  return (
    <Fragment>
      <AdminNavbarComponent />
      <section className="flex bg-gray-100">
        <AdminSidebarComponent />
        <div className="w-full md:w-11/12 h-full">
          {/* All Children pass from here */}
          {children}
        </div>
      </section>
      <AdminFooterComponent />
    </Fragment>
  );
};

export default AdminLayoutComponent;
