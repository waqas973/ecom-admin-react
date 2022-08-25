import moment from "moment";
import React, { Fragment, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { DashboardContext } from "src/pages/dashboardAdmin/context/DashboardContext";
import { todayAllOrders } from "../Action";
import TodayOrderTableComponent from "src/pages/dashboardAdmin/components/TodayOrderTableComponent";

const SellTableComponent = () => {
  const history = useHistory();
  const { data, dispatch } = useContext(DashboardContext);

  useEffect(() => {
    todayAllOrders(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ordersList = () => {
    let newList = [];
    if (data.totalOrders.Orders !== undefined) {
      data.totalOrders.Orders.forEach(function (elem) {
        if (moment(elem.createdAt).format("LL") === moment().format("LL")) {
          newList = [...newList, elem];
        }
      });
    }
    return newList;
  };

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <div className="text-2xl font-semibold mb-6 text-center">
          Today's Orders{" "}
          {data.totalOrders.Orders !== undefined ? ordersList().length : 0}
        </div>
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Products</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Order Address</th>
              <th className="px-4 py-2 border">Ordered at</th>
            </tr>
          </thead>
          <tbody>
            {data.totalOrders.Orders !== undefined &&
            data.totalOrders?.Orders?.length > 0 ? (
              ordersList().map((item, key) => {
                return <TodayOrderTableComponent order={item} key={key} />;
              })
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-xl text-center font-semibold py-8"
                >
                  No orders found today
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total{" "}
          {data.totalOrders.Orders !== undefined ? ordersList().length : 0}{" "}
          orders found
        </div>
        <div className="flex justify-center">
          <span
            onClick={(e) => history.push("/admin/dashboard/orders")}
            style={{ background: "#303031" }}
            className="cursor-pointer px-4 py-2 text-white rounded-full"
          >
            View All
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default SellTableComponent;
