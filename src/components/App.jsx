import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Layout } from './Layout';

const MainPage = lazy(() => import('pages/Main/Main.jsx'));
const CafePage = lazy(() => import('pages/Cafe/Cafe.jsx'));
const FastfoodPage = lazy(() => import('pages/Fastfood/Fastfood.jsx'));
const CoworkingPage = lazy(() => import('pages/Coworking/Coworking.jsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/fastfood" element={<FastfoodPage />} />
        <Route path="/coworking" element={<CoworkingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
