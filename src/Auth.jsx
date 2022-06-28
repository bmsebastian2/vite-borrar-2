import { useContext } from 'react';
import { UserContext } from './context/UserProvider';
import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/logging" replace={true} />;
  }
  return children;
};
export default Auth;
