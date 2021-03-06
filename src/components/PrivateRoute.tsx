import Router from "next/router";
import React from "react";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Component {...rest} />;
  }
  Router.push("/login");
};

export { PrivateRoute };
