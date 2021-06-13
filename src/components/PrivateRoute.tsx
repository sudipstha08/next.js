import Router from "next/router";
import React from "react";
import { useAuth } from "../AuthContext";

const PrivateRoute = (Component: any) => {
  const Auth = (props: any) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
      return Router.push("/login");
    }

    return <Component {...props} />;
  };

  if (Component?.getInitialProps) {
    Auth.getInitialProps = Component?.getInitialProps;
  }
  return Auth;
  // Router.push("/login");
};

export { PrivateRoute };
