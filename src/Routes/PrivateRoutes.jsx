import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { isAuthenticated } = useSelector(state => state.user);
    return (
        <>
            {isAuthenticated === false ? <Navigate to="/login" /> : children}
        </>
    );
};

export default PrivateRoute;