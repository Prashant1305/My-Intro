import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../Context/Auth';
import { v4 as uuid } from 'uuid';


function AdminUsers() {
    const { token } = TokenContext();
    const [users, setUsers] = useState([]);
    const getAllUserData = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const res_data = await res.json();
            setUsers(res_data);
            // console.log(res_data);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteUser = async (id) => {
        console.log(id);
        try {
            const res = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.ok) {
                getAllUserData();
            }
            const vrfy = await res.json();
            // console.log(vrfy);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getAllUserData();
    }, []);
    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Users Data </h1>
                </div>
                <div className='containe admin-users'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return (<tr key={uuid()}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td><Link to={`/admin/users/${user._id}/edit`}>Update</Link></td>
                                    <td><button onClick={() => { deleteUser(user._id) }}>Delete</button></td>
                                </tr>);
                            })}
                        </tbody>
                    </table>

                </div>
            </section>
        </>
    )
}

export default AdminUsers;