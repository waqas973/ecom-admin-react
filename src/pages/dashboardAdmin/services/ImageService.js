import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const postUploadImage = async (formData) => {
  try {
    let res = await axios.post(
      `${apiURL}/api/customize/upload-slide-image`,
      formData
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteImage = async (id) => {
  try {
    let res = await axios.post(`${apiURL}/api/customize/delete-slide-image`, {
      id,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
