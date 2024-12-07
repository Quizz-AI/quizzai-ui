import {
  Route,
  Routes as ReactRoutes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { LandingPage, QuestionPage } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/question" element={<QuestionPage></QuestionPage>} />
        <Route path="*" element={<Navigate to="/" />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
