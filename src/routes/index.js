import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CategoriesPages from "src/pages/categories/CategoriesPages";
import CheckoutPage from "src/pages/checkout/CheckoutPage";
import DashboardAdminPages from "src/pages/dashboardAdmin/DashboardAdminPages";
import HomePages from "src/pages/home/HomePages";
import ProductByCategoryPage from "src/pages/productByCategory/ProductByCategoryPage";
import ProductDetailsPages from "src/pages/productDetails/ProductDetailsPages";
import ProductsPages from "src/pages/Products/ProductsPages";
import WishListPage from "src/pages/wishList/WishListPage";
import AdminProtectedRoute from "src/routes/AdminProtectedRoute";
import CartProtectedRoute from "./CartProtectedRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={HomePages} />
        <Route exact path="/wish-list" component={WishListPage} />
        <Route exact path="/products/:id" component={ProductDetailsPages} />
        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategoryPage}
        />

        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        />

        {/* Admin Routes */}
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdminPages}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/categories"
          component={CategoriesPages}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/products"
          component={ProductsPages}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
