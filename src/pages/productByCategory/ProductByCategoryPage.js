import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutComponent from "src/shared/components/LayoutComponent";
import AllProductComponent from "./components/AllProductComponent";
import { productByCategory } from "./services/ProductByCategoryService";

const PageComponent = () => {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      let { data: responseData } = await productByCategory(catId);
      if (responseData && responseData.Products) {
        setProducts(responseData.Products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <AllProductComponent products={products} />
    </Fragment>
  );
};

const ProductByCategoryPage = () => {
  return (
    <Fragment>
      <LayoutComponent>
        <PageComponent />
      </LayoutComponent>
    </Fragment>
  );
};

export default ProductByCategoryPage;
