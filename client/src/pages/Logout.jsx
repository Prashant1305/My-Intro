import React from 'react'
import { TokenContext } from '../Context/Auth'
import { useNavigate } from 'react-router-dom'

function Logout() {
    let { setLogged, setToken } = TokenContext()
    const navigate = useNavigate();

    return (
        <div>
            <h1>Are sure you want to logout</h1>
            <div>
                <button onClick={() => {
                    setLogged(false);
                    setToken("");
                    localStorage.removeItem("token");
                    navigate('/login');
                }}>Yes</button><button onClick={() => { navigate('/'); }}>No</button>
            </div>
        </div>
    )
}

export default Logout