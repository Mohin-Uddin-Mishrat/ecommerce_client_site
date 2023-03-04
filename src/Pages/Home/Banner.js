import React from 'react';
import Laptop from '../../Assets/laptop-removebg-preview.png';
import watch1 from '../../Assets/w6-removebg-preview.png';
import watch2 from '../../Assets/w6-removebg-preview.png';

const Banner = () => {
    return (
        <div className='my-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className="hero col-span-2 row-span-2 rounded-lg bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Laptop} className="max-w-sm rounded-lg " />
                        <div>
                            <h1 className="text-5xl font-bold">Apple Macbook Pro Max</h1>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                
                <div className='grid grid-rows-2 gap-y-3'>
                    <div className='pl-7 bg-base-200 rounded-lg'>
                        <div className="hero   bg-base-200">
                            <div className="hero-content grid-cols-2">
                                
                                <div>
                                    <h1 className="text-2xl font-bold">Apple Macbook Pro Max</h1>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                                <div>
                                    <img src={Laptop} className="max-w-sm w-full  rounded-lg " />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pl-7 bg-base-200 rounded-lg'>
                        <div className="hero   bg-base-200">
                            <div className="hero-content grid-cols-2">
                                
                                <div>
                                    <h1 className="text-2xl font-bold">Apple Macbook Pro Max</h1>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                                <div>
                                    <img src={Laptop} className="max-w-sm w-full  rounded-lg " />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;