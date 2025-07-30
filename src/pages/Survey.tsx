import { Route, Routes } from "react-router-dom";
import { Survey } from "./Survey/SurveyLayout";

export const SurveyRoutes = () => (
  <Routes>
    <Route path="*" element={<Survey />} />
    {/* Add more survey-related routes here as needed */}
  </Routes>
);