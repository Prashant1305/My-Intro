import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { TokenContext } from '../Context/Auth';

function AdminLayout() {
    const { user, isLoading } = TokenContext();
    console.log(user);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (!user.isAdmin) {
        return <Navigate to="/" />
    }
    return (
        <div><AdminNavbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout