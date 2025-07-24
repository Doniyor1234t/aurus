import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing.tsx';
import MainLayout from '../layouts/MainLayout.tsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Landing />} />
      {/* Add more routes here as needed */}
    </Route>
  </Routes>
);

export default AppRoutes;
