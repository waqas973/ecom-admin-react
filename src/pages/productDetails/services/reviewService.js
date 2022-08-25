import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

export const deleteReview = async (
  reviewId,
  productId,
  fetchData,
  setFdata
) => {
  try {
    let responseData = await postDeleteReview({
      rId: reviewId,
      pId: productId,
    });
    if (responseData.success) {
      fetchData();
      setFdata({ success: responseData.success });
    } else if (responseData.error) {
      fetchData();
    }
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/delete-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAddReview = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/product/add-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
