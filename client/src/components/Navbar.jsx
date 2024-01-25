import React from 'react'
import { TokenContext } from '../store/auth';
import { NavLink } from 'react-router-dom';
import { IoHomeSharp, IoLogOutSharp, IoLogInSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";

function Navbar() {
    const { isLogged, user } = TokenContext();
    return (

        <header>
            {/* <h2>RootLayout</h2> */}
            <div className='container'>
                <div className='logo-brand'>
                    <NavLink to='/'>Prashant Singh</NavLink>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' ><h4><IoHomeSharp />&nbsp;Home</h4></NavLink>
                        </li><li>
                            <NavLink to='about' ><h4><FaInfoCircle />&nbsp;About</h4></NavLink>
                        </li><li>
                            <NavLink to='contact' ><h4><MdContactMail />&nbsp;Contact</h4></NavLink>
                        </li><li>
                            <NavLink to='services' ><h4><RiCustomerServiceFill />&nbsp;Services</h4></NavLink>
                        </li>
                        {isLogged && user.isAdmin && <li><NavLink to='admin'><h4><MdAdminPanelSettings />&nbsp;Admin</h4></NavLink></li>}
                        {!isLogged && <li>
                            <NavLink to='login' ><h4><IoLogInSharp />&nbsp;Login</h4></NavLink>
                        </li>}{isLogged && <li>
                            <NavLink to='logout' > <h4><IoLogOutSharp />&nbsp;Logout</h4></NavLink>
                        </li>}{!isLogged && <li>
                            <NavLink to='register' ><h4><SiGnuprivacyguard />&nbsp;SignUp</h4></NavLink>
                        </li>}
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Navbar