import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import '../style/menu.css';

const Menu = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <nav>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/about">
          <p>About</p>
        </NavLink>
        <NavLink to="/logging">
          <p>Logging</p>
        </NavLink>
        <NavLink to="/sistema">
          <p>Sistema</p>
        </NavLink>
      </nav>
    </>
  );
};

export default Menu;
