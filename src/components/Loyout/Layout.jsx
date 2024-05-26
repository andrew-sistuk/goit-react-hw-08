import css from './Layout.module.css';

export function Layout({ children }) {
  return <main className={css.container}>{children}</main>;
}
