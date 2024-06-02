import 'modern-normalize';
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components';
import { SkewLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    <Layout>
      <Suspense fallback={<SkewLoader color="#646cff" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
