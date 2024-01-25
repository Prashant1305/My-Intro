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
import Auth from './store/auth';
import Logout from './pages/Logout';

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
            <Route path='*' element={<Err />} />
        </Route>
    ));
    return (
        <>
            {/* <p>this is app.jsx</p> */}
            <Auth>
                <RouterProvider router={router} />
            </Auth>
        </>
    )
}

export default Routing