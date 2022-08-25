import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const getAllOrder = async () => {
  return await axios.get(`${apiURL}/api/order/get-all-orders`);
};
