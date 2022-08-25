import React, { Fragment, useReducer } from "react";

import LayoutComponent from "src/shared/components/LayoutComponent";
import {
  HomeContext,
  homeReducer,
  homeState,
} from "src/pages/home/context/HomeContext";
import SliderComponent from "src/pages/home/components/SliderComponent";
import ProductCategoryComponent from "src/pages/home/components/ProductCategoryComponent";
import SingleProductComponent from "src/pages/home/components/SingleProductComponent";

const HomeComponent = () => {
  return (
    <Fragment>
      <SliderComponent />
      {/* Category, Search & Filter Section */}
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategoryComponent />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProductComponent />
      </section>
    </Fragment>
  );
};

const HomePages = () => {
  const [data, dispatch] = useReducer(homeReducer, homeState);

  return (
    <HomeContext.Provider value={{ data, dispatch }}>
      <LayoutComponent>
        <HomeComponent />
      </LayoutComponent>
    </HomeContext.Provider>
  );
};

export default HomePages;
