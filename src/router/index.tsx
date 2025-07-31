import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing.tsx';
import MainLayout from '../layouts/MainLayout.tsx';
// import { SurveyRoutes } from '../pages/Survey.tsx';
import { Survey } from '../pages/Survey/SurveyLayout.tsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Landing />} />
      {/* Add more routes here as needed */}
    </Route>
    <Route path="survey/*" element={<Survey />} />
  </Routes>
);

export default AppRoutes;
