import React, { Fragment, useReducer } from "react";

import {
  CategoryContext,
  categoryReducer,
  categoryState,
} from "src/pages/categories/context/CategoryContext";
import AdminLayoutComponent from "src/shared/components/AdminLayoutComponent";
import CategoryMenuComponent from "src/pages/categories/components/CategoryMenuComponent";
import AllCategoriesComponent from "src/pages/categories/components/AllCategoriesComponent";

const CategoryComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <CategoryMenuComponent />
      <AllCategoriesComponent />
    </div>
  );
};

const CategoriesPages = () => {
  const [data, dispatch] = useReducer(categoryReducer, categoryState);
  return (
    <Fragment>
      <CategoryContext.Provider value={{ data, dispatch }}>
        <AdminLayoutComponent>
          <CategoryComponent />
        </AdminLayoutComponent>
      </CategoryContext.Provider>
    </Fragment>
  );
};

export default CategoriesPages;
