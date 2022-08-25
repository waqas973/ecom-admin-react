import React, { Fragment } from "react";

import Navbar from "src/shared/components/NavbarComponent";
import FooterComponent from "src/shared/components/FooterComponent";
import LoginSignupModal from "src/shared/modals/LoginSignupModal";
import CartModal from "src/shared/modals/CartModal";

const LayoutComponent = ({ children }) => {
  return (
    <Fragment>
      <div className="flex-grow">
        <Navbar />
        <LoginSignupModal />
        <CartModal />
        {children}
      </div>
      <FooterComponent />
    </Fragment>
  );
};

export default LayoutComponent;
