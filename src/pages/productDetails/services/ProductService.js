import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

export const getSingleProduct = async (pId) => {
  return await axios.post(`${apiURL}/api/product/single-product`, {
    pId: pId,
  });
};
