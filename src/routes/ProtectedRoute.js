import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAdmin } from "src/helper/isAdmin";
import { isAuthenticate } from "src/helper/isAuthenticate";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate() && !isAdmin() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
