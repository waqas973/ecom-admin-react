import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

export const sliderImagesService = async (dispatch) => {
  try {
    let { data: responseData } = await getSliderImages();
    if (responseData && responseData.Images) {
      dispatch({ type: "sliderImages", payload: responseData.Images });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSliderImages = async () => {
  return await axios.get(`${apiURL}/api/customize/get-slide-image`);
};
