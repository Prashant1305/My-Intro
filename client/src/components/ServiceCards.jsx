import React from 'react'

function ServiceCards({ service }) {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src="/images/design.png" alt="failed to load image" width={500} />
            </div>
            <div className='card-datails'>
                <div className='grid grid-two-cols'>
                    <h4>{service.provider}</h4>
                    <h4>{service.price}</h4>
                </div>
                <h2>{service.service}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    )
}

export default ServiceCards;