import Menu from './Menu';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div
        className=""
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <div className="">
          <h1>Prueba APP v.0.1</h1>
        </div>
        <div className="" style={{ display: 'flex', alignItems: 'center' }}>
          {!user ? (
            <p style={{ color: 'red' }}>False</p>
          ) : (
            <>
              <p style={{ color: 'green' }}>True</p>
              <button
                style={{ maxHeight: '1.5rem', margin: '0.5rem' }}
                onClick={() => setUser(false)}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
      <hr />
      <Menu />
      <hr />
    </>
  );
};

export default Header;
