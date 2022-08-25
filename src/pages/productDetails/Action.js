import { postAddReview } from "./services/reviewService";

export const addReview = async (fData, setFdata, fetchData) => {
  let formData = {
    rating: fData.rating,
    review: fData.review,
    pId: fData.pId,
    uId: JSON.parse(localStorage.getItem("jwt")).user._id,
  };
  try {
    let responseData = await postAddReview(formData);
    if (responseData.success) {
      setFdata({
        ...fData,
        success: responseData.success,
        review: "",
        rating: "",
      });
      fetchData();
    } else if (responseData.error) {
      setFdata({ ...fData, error: responseData.error, review: "", rating: "" });
      fetchData();
    }
  } catch (error) {
    console.log(error);
  }
};
