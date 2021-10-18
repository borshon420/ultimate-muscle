import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setService] = useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="my-5">
            <h1 className="my-3">Our Services</h1>
            <Container>
            <div className="services-container">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </div>
            </Container>
        </div>
    );
};

export default Services;