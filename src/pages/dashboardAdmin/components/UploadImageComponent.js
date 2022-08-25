import React, { Fragment, useContext } from "react";

import { DashboardContext } from "src/pages/dashboardAdmin/context/DashboardContext";
import { uploadImage } from "../Action";
import AllImagesComponent from "src/pages/dashboardAdmin/components/AllImagesComponent";

const UploadImageComponent = () => {
  const { data, dispatch } = useContext(DashboardContext);

  const uploadImageHandler = (image) => {
    uploadImage(image, dispatch);
  };
  return (
    <Fragment>
      <div className="relative m-4 bg-white p-4 shadow-lg">
        <h1 className="border-b-2 border-yellow-700 mb-4 pb-2 text-2xl font-semibold">
          Shop Slider Images
        </h1>
        <div className="relative flex flex-col space-y-2">
          <div
            style={{ background: "#303031" }}
            className="relative z-0 px-4 py-2 rounded text-white flex justify-center space-x-2 md:w-4/12"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>{" "}
            <span>Upload File</span>
          </div>
          <input
            onChange={(e) => uploadImageHandler(e.target.files[0])}
            name="image"
            accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
            className="absolute z-10 opacity-0 bg-gray-100"
            type="file"
            id="image"
          />
        </div>
        <span
          onClick={(e) =>
            dispatch({
              type: "uploadSliderBtn",
              payload: !data.uploadSliderBtn,
            })
          }
          style={{ background: "#303031" }}
          className="cursor-pointer absolute top-0 right-0 m-4 rounded-full p-1"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <AllImagesComponent />
      </div>
    </Fragment>
  );
};

export default UploadImageComponent;
