import React, { Fragment } from "react";

import ProductComponent from "src/pages/wishList/components/ProductComponent";

const SingleWishProductComponent = () => {
  return (
    <Fragment>
      <section className="mx-4 mt-20 md:mx-12 md:mt-32 lg:mt-24">
        <div className="text-2xl mx-2 mb-6">Wishlist</div>
        {/* Product List */}
        <ProductComponent />
      </section>
    </Fragment>
  );
};

export default SingleWishProductComponent;
