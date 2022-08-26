import { getSliderImages } from "src/shared/services/slideImagesService";
import {
  postDeleteImage,
  postUploadImage,
} from "src/pages/dashboardAdmin/services/ImageService";
import { getAllOrder } from "src/shared/services/orderService";

export const uploadImage = async (image, dispatch) => {
  dispatch({ type: "imageUpload", payload: true });
  let formData = new FormData();
  formData.append("image", image);

  try {
    let responseData = await postUploadImage(formData);
    if (responseData && responseData.success) {
      setTimeout(function () {
        dispatch({ type: "imageUpload", payload: false });
        sliderImages(dispatch);
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const sliderImages = async (dispatch) => {
  try {
    let { data: responseData } = await getSliderImages();
    if (responseData && responseData.Images) {
      dispatch({ type: "sliderImages", payload: responseData.Images });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteImage = async (id, dispatch) => {
  dispatch({ type: "imageUpload", payload: true });
  try {
    let responseData = await postDeleteImage(id);
    if (responseData && responseData.success) {
      setTimeout(function () {
        sliderImages(dispatch);
        dispatch({ type: "imageUpload", payload: false });
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const todayAllOrders = async (dispatch) => {
  let { data: responseData } = await getAllOrder();
  if (responseData) {
    dispatch({ type: "totalOrders", payload: responseData });
  }
};
