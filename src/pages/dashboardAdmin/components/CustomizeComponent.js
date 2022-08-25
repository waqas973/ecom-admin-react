import React, { Fragment, useContext } from "react";

import { DashboardContext } from "src/pages/dashboardAdmin/context/DashboardContext";
import UploadImageComponent from "src/pages/dashboardAdmin/components/UploadImageComponent";

const CustomizeComponent = () => {
  const { data, dispatch } = useContext(DashboardContext);

  return (
    <Fragment>
      <div className="m-4 md:w-1/2">
        {!data.uploadSliderBtn ? (
          <div
            onClick={(e) =>
              dispatch({
                type: "uploadSliderBtn",
                payload: !data.uploadSliderBtn,
              })
            }
            style={{ background: "#303031" }}
            className="cursor-pointer rounded-full p-2 flex items-center justify-center text-gray-100 text-sm font-semibold uppercase"
          >
            <svg
              className="w-6 h-6 text-gray-100 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Customize Slider Image
          </div>
        ) : (
          ""
        )}
      </div>
      {data.uploadSliderBtn ? <UploadImageComponent /> : ""}
    </Fragment>
  );
};

export default CustomizeComponent;
