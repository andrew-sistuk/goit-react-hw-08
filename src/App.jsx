import 'modern-normalize';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components';
import { SkewLoader } from 'react-spinners';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

export default function App() {
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
