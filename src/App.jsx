import 'modern-normalize';
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components';
import { SkewLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <SkewLoader color="#646cff" />
      ) : (
        <Suspense fallback={<SkewLoader color="#646cff" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/" />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactPage />} redirectTo="/login" />}
            />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}
