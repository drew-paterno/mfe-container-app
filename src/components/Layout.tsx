import { Outlet, useNavigate } from 'react-router-dom';

function Layout() {

    const navigate = useNavigate();

    return(
        <>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/mfe-1')}>MFE 1</button>
            <Outlet/>
        </>
    )

}

export default Layout;