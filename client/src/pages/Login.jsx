import React, { useState } from 'react'
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../Context/Auth';
import { toast } from "react-toastify";

function Login() {
    const [user, setuser] = useState({
        email: "",
        password: ""
    });

    function handleInput(e) {
        setuser({ ...user, [e.target.name]: e.target.value });
    }
    const navigate = useNavigate();
    const { token, setToken, setLogged } = TokenContext();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
            // console.log(res.body);

            const res_data = await res.json();
            // console.log(res_data);
            if (res.ok) {
                localStorage.setItem("token", res_data.token);
                setToken(res_data.token);
                setLogged(true);
                // console.log("settoken wala token", token);
                toast.success("Login Successfull");
                navigate("/");
            }
            else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("invalid credential");
            }
            // console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section>
            <main>
                <div className='section-registration'>
                    <div className='container grid grid-two-cols'>
                        <div className='registration-image'>
                            <img src="/images/login.png" alt="failed to load image" width="500" height="500" />
                        </div>
                        <div className='registration-form'>
                            <h1 className='main-heading mb-3'>Login form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor='email'>email</label>
                                    <input type="email" name="email" placeholder='email' id='email' value={user.email} onChange={handleInput} required autoComplete='off' />
                                </div>
                                <div>
                                    <label htmlFor='password'>password</label>
                                    <input type="password" name="password" placeholder='password' id='password' value={user.password} onChange={handleInput} required autoComplete='off' />
                                </div>
                                <br />
                                <button type="submit" className='btn btn-submit'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Login