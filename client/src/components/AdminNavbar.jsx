import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaRegListAlt, FaUserEdit } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


function AdminNavbar() {
    return (
        <header>
            <div className='container'>
                <nav>
                    <ul>
                        <li><NavLink to="/admin"><FaHome />&nbsp;Home</NavLink></li>
                        <li><NavLink to="users"><FaUserEdit />&nbsp;Users</NavLink></li>
                        <li><NavLink to="contacts"><FaMessage />&nbsp;Contacts</NavLink></li>
                        <li><NavLink to="services"> <FaRegListAlt />&nbsp;Services</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default AdminNavbar