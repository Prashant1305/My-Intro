import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Services from './pages/Services';
import Register from './pages/Register';
import Err from './pages/Err';
import Auth from './Context/Auth';
import Logout from './pages/Logout';
import AdminLayout from './components/AdminLayout';
import AdminUsers from './pages/AdminUsers';
import AdminContacts from './pages/AdminContacts';
import AdminHome from './pages/AdminHome';
import AdminUpdateUsers from './pages/AdminUpdateUsers';

function Routing() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<RootLayout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='services' element={<Services />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='admin' element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path='users' element={<AdminUsers />} />
                <Route path='contacts' element={<AdminContacts />} />
                <Route path='/admin/users/:id/edit' element={<AdminUpdateUsers />} />
            </Route>
            <Route path='*' element={<Err />} />
        </Route>
    ));
    return (
        <>
            <Auth>
                <RouterProvider router={router} />
            </Auth>
        </>
    )
}

export default Routing