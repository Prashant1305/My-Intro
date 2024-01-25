import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './RootLayout.css';
import { TokenContext } from '../store/auth';

function RootLayout() {
    const { isLogged, setLogged } = TokenContext();
    return (
        <>
            <header>
                {/* <h2>RootLayout</h2> */}
                <div className='container'>
                    <div className='logo-brand'>
                        <NavLink to='/'>Prashant Singh</NavLink>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/' ><h4>Home</h4></NavLink>
                            </li><li>
                                <NavLink to='about' ><h4>About</h4></NavLink>
                            </li><li>
                                <NavLink to='contact' ><h4>Contact</h4></NavLink>
                            </li><li>
                                <NavLink to='services' ><h4>Services</h4></NavLink>
                            </li>{!isLogged && <li>
                                <NavLink to='login' ><h4>Login</h4></NavLink>
                            </li>}{isLogged && <li>
                                <NavLink to='logout' > <h4>Logout</h4></NavLink>
                            </li>}{!isLogged && <li>
                                <NavLink to='register' ><h4>SignUp</h4></NavLink>
                            </li>}
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet />
            </main>

        </>
    );
}

export default RootLayout;