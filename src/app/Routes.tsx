import React from "react";
import {
  Route,
  Routes as ReactRoutes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { LandingPage } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<LandingPage></LandingPage>} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
