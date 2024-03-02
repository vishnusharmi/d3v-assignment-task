import React from "react";
import { Route, Navigate } from "react-router-dom";
import AuthService from "../../servises/AuthService";

export default function Route({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        AuthService.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
}
