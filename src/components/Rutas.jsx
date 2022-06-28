import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../routes/Home';
import Logging from '../routes/Logging';
import About from '../routes/About';
import Sistema from '../routes/Sistema';
import Auth from '../Auth';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const Rutas = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logging" element={<Logging />} />
        <Route
          path="/sistema"
          element={
            <Auth>
              <Sistema />
            </Auth>
          }
        />
      </Routes>
    </>
  );
};

export default Rutas;
