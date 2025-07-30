import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing.tsx';
import MainLayout from '../layouts/MainLayout.tsx';
import { SurveyRoutes } from '../pages/Survey.tsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Landing />} />
      {/* Add more routes here as needed */}
    </Route>
    <Route path="survey/*" element={<SurveyRoutes />} />
  </Routes>
);

export default AppRoutes;
