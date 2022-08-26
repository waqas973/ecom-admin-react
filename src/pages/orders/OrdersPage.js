import React, { Fragment, useReducer } from "react";

import AdminLayoutComponent from "src/shared/components/AdminLayoutComponent";
import AllOrdersComponent from "./components/AllOrdersComponent";
import OrderMenuComponent from "./components/OrderMenuComponent";
import { OrderContext, orderReducer, orderState } from "./context/OrderContext";

const OrderComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <OrderMenuComponent />
      <AllOrdersComponent />
    </div>
  );
};

const OrdersPage = () => {
  const [data, dispatch] = useReducer(orderReducer, orderState);

  return (
    <Fragment>
      <OrderContext.Provider value={{ data, dispatch }}>
        <AdminLayoutComponent>
          <OrderComponent />
        </AdminLayoutComponent>
      </OrderContext.Provider>
    </Fragment>
  );
};

export default OrdersPage;
