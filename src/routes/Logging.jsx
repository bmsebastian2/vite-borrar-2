import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const Logging = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1 style={{ color: 'green' }}>Logging</h1>
      <p style={{ color: 'blue' }}>
        {!user ? 'Ingrese al usario' : 'Usuario logeado'}
      </p>
      <button onClick={() => setUser(true)}>Ingresar</button>
    </>
  );
};

export default Logging;
