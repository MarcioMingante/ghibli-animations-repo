import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <nav>
        {pathname === '/favorites' ? (
          <Link to="/">Films</Link>
        ) : (
          <Link to="/favorites">Favorites</Link>
        )}
      </nav>
    </header>
  );
}
