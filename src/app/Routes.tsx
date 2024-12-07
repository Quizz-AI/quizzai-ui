import {
  Route,
  Routes as ReactRoutes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { LandingPage, RegisterPage } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route path="*" element={<Navigate to="/" />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
