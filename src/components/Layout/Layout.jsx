import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import style from './Layout.module.css';
export const Layout = () => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <nav>
          <NavLink className={style.link} to="/" end>
            Home
          </NavLink>
          <NavLink className={style.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
