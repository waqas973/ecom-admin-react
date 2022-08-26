import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const getAllOrder = async () => {
  return await axios.get(`${apiURL}/api/order/get-all-orders`);
};

export const deleteOrder = async (oId) => {
  let data = { oId: oId };
  try {
    let res = await axios.post(`${apiURL}/api/order/delete-order`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editOrderCategory = async (oId, status) => {
  let data = { oId: oId, status: status };

  return await axios.post(`${apiURL}/api/order/update-order`, data);
};
