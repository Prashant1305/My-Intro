import React, { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import "./Services.css";
import ServiceCards from '../components/ServiceCards';
import { TokenContext } from '../Context/Auth';

function Services() {
    const [data, setData] = useState([]);
    const { baseUrl } = TokenContext();
    const fetchServices = async (req, res) => {
        try {
            const res = await fetch(`${baseUrl}/api/data/service`);
            console.log(res);
            const res_data = await res.json();
            setData(res_data.msg);
            console.log(res_data);
        } catch (error) {
            console.log(`error from service.jsx: ${error}`);
        }
    };
    useEffect(() => { fetchServices() }, []);
    return (
        // {data.map((service) => { return (<ServiceCards service={service} key={uuid()} />) })}
        <section className='section-services'>
            <div className='container'>
                <h1 className='main-heading'>Services</h1>
            </div>
            <div className="container grid grid-three-cols">
                {data.map((service) => { return (<ServiceCards service={service} key={uuid()} />) })}
            </div>

        </section>
    )
}

export default Services