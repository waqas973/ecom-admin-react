import React, { Fragment, useContext, useEffect } from "react";

import { CategoryContext } from "src/pages/categories/context/CategoryContext";
import {
  deleteCategory,
  getAllCategory,
} from "src/shared/services/categoryServcie";
import CategoryTableComponent from "src/pages/categories/components/CategoryTableComponent";

const AllCategoriesComponent = () => {
  const { data, dispatch } = useContext(CategoryContext);
  const { categories, loading } = data;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    let { data: responseData } = await getAllCategory();
    setTimeout(() => {
      if (responseData && responseData.Categories) {
        dispatch({
          type: "fetchCategoryAndChangeState",
          payload: responseData.Categories,
        });
        dispatch({ type: "loading", payload: false });
      }
    }, 1000);
  };

  const deleteCategoryReq = async (cId) => {
    let { data: deleteC } = await deleteCategory(cId);
    if (deleteC.error) {
      console.log(deleteC.error);
    } else if (deleteC.success) {
      fetchData();
    }
  };
  /* This method call the editmodal & dispatch category context */
  const editCategory = (cId, type, des, status) => {
    if (type) {
      dispatch({
        type: "editCategoryModalOpen",
        cId: cId,
        des: des,
        status: status,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Created at</th>
              <th className="px-4 py-2 border">Updated at</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories && categories.length > 0 ? (
              categories.map((item, key) => {
                return (
                  <CategoryTableComponent
                    category={item}
                    editCat={(cId, type, des, status) =>
                      editCategory(cId, type, des, status)
                    }
                    deleteCat={(cId) => deleteCategoryReq(cId)}
                    key={key}
                  />
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-xl text-center font-semibold py-8"
                >
                  No category found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Total {categories && categories.length} category found
        </div>
      </div>
    </Fragment>
  );
};

export default AllCategoriesComponent;
