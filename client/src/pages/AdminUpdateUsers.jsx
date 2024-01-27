import React, { useEffect, useState } from 'react'
import { json, useParams } from "react-router-dom";
import { TokenContext } from '../Context/Auth';
import { toast } from "react-toastify";

function AdminUpdateUsers() {
    const param = useParams();
    // console.log(param);
    const { token } = TokenContext();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        phone: "",
        isAdmin: ""
    });

    const handleInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const getSingleUser = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/admin/users/${param.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                const res_data = await res.json();
                setUserData(res_data);
                console.log(res_data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getSingleUser() }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);
        try {
            const res = await fetch(`http://localhost:5000/api/admin/users/update/${param.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userData)
            });
            if (res.ok) {
                const res_data = await res.json();
                // console.log(res_data);
                if (!res_data.acknowledged) {
                    toast.error("Update Failure, Backened failed update with mongoDb");
                }
                toast.success("Update Successfull");
            }
            else {
                toast.error("Update Failure");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading">Update User Data</h1>
            </div>
            {/* contact page main  */}
            <div className="container grid grid-two-cols">
                {/* contact form content actual  */}
                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="off"
                                value={userData.username}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                value={userData.email}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone">Mobile</label>
                            <input
                                type="phone"
                                name="phone"
                                id="phone"
                                autoComplete="off"
                                value={userData.phone}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="isAdmin">isAdmin</label>
                            <input
                                type="text"
                                name="isAdmin"
                                id="isAdmin"
                                autoComplete="off"
                                value={userData.isAdmin}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default AdminUpdateUsers;