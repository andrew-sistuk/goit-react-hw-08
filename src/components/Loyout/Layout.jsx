import { AppBar } from 'components';
import css from './Layout.module.css';
import { Toaster } from 'react-hot-toast';

export function Layout({ children }) {
  return (
    <main className={css.container}>
      <AppBar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
