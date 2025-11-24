import React, { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='px-[145px]'>
            <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-12 gap-10'>
                {
                    services.map(service =>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img className='w-full h-[300px] object-cover'
                                    src={service?.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service?.serviceName}</h2>
                                <div className=' flex justify-between'>
                                    <p>Price:{service?.price}</p>
                                    <p>Rating:{service?.rating}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;