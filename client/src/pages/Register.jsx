import React, { useState } from 'react'
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { TokenContext } from '../Context/Auth';


function Register() {
    const [user, setuser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
    const { baseUrl } = TokenContext();
    function handleInput(e) {
        setuser({ ...user, [e.target.name]: e.target.value });
    }
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            console.log(user);
            const res = await fetch(`${baseUrl}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
            const res_data = await res.json();
            console.log(res_data);
            if (res.ok) {
                // localStorage.setItem("token", res_data.token);
                toast.success("Registraion successfull");
                navigate("/login");
            }
            else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("invalid credential");
            }
        } catch (error) {

            console.log(error);
        }
    }
    return (
        <>
            <section>
                <main>
                    <div className='section-registration'>
                        <div className='container grid grid-two-cols'>
                            <div className='registration-image'>
                                <img src="/images/register.png" alt="failed to load image" width="500" height="500" />
                            </div>
                            <div className='registration-form'>
                                <h1 className='main-heading mb-3'>registraion form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor='username'>username</label>
                                        <input type="text" name="username" placeholder='username' id='username' value={user.username} onChange={handleInput} required autoComplete='off' />
                                    </div>
                                    <div>
                                        <label htmlFor='email'>email</label>
                                        <input type="email" name="email" placeholder='email' id='email' value={user.email} onChange={handleInput} required autoComplete='off' />
                                    </div>
                                    <div>
                                        <label htmlFor='phone'>phone</label>
                                        <input type="number" name="phone" placeholder='phone' id='phone' value={user.phone} onChange={handleInput} required autoComplete='off' />
                                    </div>
                                    <div>
                                        <label htmlFor='password'>password</label>
                                        <input type="password" name="password" placeholder='password' id='password' value={user.password} onChange={handleInput} required autoComplete='off' />
                                    </div>
                                    <br />
                                    <button type="submit" className='btn btn-submit'>Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Register