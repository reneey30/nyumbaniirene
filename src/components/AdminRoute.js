import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AdminRoute({ component: Component, ...rest }) {
  const auth = localStorage.getItem("auth");

  return (
    <Route
      {...rest}
      render={(props) => {
        return auth && auth.isAdmin === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin" />
        );
      }}
    ></Route>
  );
}