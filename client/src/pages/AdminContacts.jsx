import React, { useEffect, useState } from 'react'
import { TokenContext } from '../Context/Auth';
import { toast } from "react-toastify";

function AdminContacts() {
    const [contacts, setContacts] = useState([]);
    const { token, baseUrl } = TokenContext();
    const fetchAllContacts = async () => {
        try {
            const res = await fetch(`${baseUrl}/api/admin/contacts`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const res_data = await res.json();

            if (res.ok) {
                setContacts(res_data);
                // console.log(res_data);
            }
            else {
                setContacts([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllContacts()
    }, []);

    const deleteContactById = async (id) => {
        try {
            const res = await fetch(`${baseUrl}/api/admin/contacts/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.ok) {
                fetchAllContacts();
                toast.success("Contact deleted");
            } else {
                toast.error("Failed to delete Contact");
            }


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className="admin-contacts-section">
                <h1>Admin Contact Data </h1>
                <div className="container  admin-users">{contacts.length > 0 && contacts.map((contact) => {
                    return (<div key={contact._id}>
                        <p>{contact.username}</p>
                        <p>{contact.email}</p>
                        <p>{contact.message}</p>
                        <button className='btn' onClick={() => {
                            deleteContactById(contact._id);
                        }}>delete</button>
                    </div>)
                })}{contacts.length == 0 && <h2>No Messages from clients</h2>}</div>
            </section >
        </>
    );
}

export default AdminContacts