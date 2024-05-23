import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "routes";

const Routes = () => {
  return <RouterProvider router={router()} />;
};

export default Routes;
