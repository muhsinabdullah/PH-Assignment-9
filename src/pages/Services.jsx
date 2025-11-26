import { UserStar } from 'lucide-react';
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
        <div className=''>
            <div
                className="hero h-150"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/4RXD3KFS/Bannerimg.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">WarmPaws Winter Services Hub</h1>
                        <p className="mb-5 text-xl">
                            Helping your pets stay warm, safe, and happy with reliable care options.
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="mt-5 mb-5 text-4xl text-center text-primary font-bold">Our Services</h1>
            <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-12 gap-10 px-[145px]'>
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
                                    <div className="badge badge-primary p-4">${service?.price}</div>
                                    <div className="badge badge-success p-4"><UserStar />{service?.rating}</div>
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