import { deleteOrder, getAllOrder } from "../../shared/services/orderService";

export const fetchData = async (dispatch) => {
  dispatch({ type: "loading", payload: true });
  let { data: responseData } = await getAllOrder();
  setTimeout(() => {
    if (responseData && responseData.Orders) {
      dispatch({
        type: "fetchOrderAndChangeState",
        payload: responseData.Orders,
      });
      dispatch({ type: "loading", payload: false });
    }
  }, 1000);
};

/* Filter All Order */
export const filterOrder = async (
  type,
  data,
  dispatch,
  dropdown,
  setDropdown
) => {
  let { data: responseData } = await getAllOrder();
  if (responseData && responseData.Orders) {
    let newData;
    if (type === "All") {
      dispatch({
        type: "fetchOrderAndChangeState",
        payload: responseData.Orders,
      });
      setDropdown(!dropdown);
    } else if (type === "Not processed") {
      newData = responseData.Orders.filter(
        (item) => item.status === "Not processed"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    } else if (type === "Processing") {
      newData = responseData.Orders.filter(
        (item) => item.status === "Processing"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    } else if (type === "Shipped") {
      newData = responseData.Orders.filter((item) => item.status === "Shipped");
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    } else if (type === "Delivered") {
      newData = responseData.Orders.filter(
        (item) => item.status === "Delivered"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    } else if (type === "Cancelled") {
      newData = responseData.Orders.filter(
        (item) => item.status === "Cancelled"
      );
      dispatch({ type: "fetchOrderAndChangeState", payload: newData });
      setDropdown(!dropdown);
    }
  }
};

/* This method call the editmodal & dispatch category context */
export const editOrderReq = (oId, type, status, dispatch) => {
  if (type) {
    dispatch({ type: "updateOrderModalOpen", oId: oId, status: status });
  }
};

export const deleteOrderReq = async (oId, dispatch) => {
  let responseData = await deleteOrder(oId);

  if (responseData && responseData.success) {
    fetchData(dispatch);
  }
};
