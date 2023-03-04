import React from 'react';
import Laptop from '../../Assets/laptop-removebg-preview.png';
import watch1 from '../../Assets/w6-removebg-preview.png';
import watch2 from '../../Assets/w8-removebg-preview.png';

const Banner = () => {
    return (
        <div className='my-5'>
            <div className='grid grid-cols-2 gap-3 lg:grid-cols-3'>
                
                <div className="hero rounded-lg min-h-screen col-span-2 row-span-2 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Laptop} className="max-w-sm rounded-lg " />
                        <div>
                            <h1 className="text-5xl font-bold">Apple Mackbook Pro!</h1>
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>

               

                <div className="hero  bg-base-200 rounded-lg">
                    <div className="hero-content ">
                        <img src={watch2} className="w-1/2 rounded-lg " />
                        <div>
                            <h1 className="text-2xl font-bold">Apple Smart Watch!</h1>
                            <button className="btn btn-sm btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
               

                <div className="hero  bg-accent rounded-lg shadow-lg">
                    <div className="hero-content ">
                        <img src={watch1} className="w-1/2 rounded-lg " />
                        <div>
                            <h1 className="text-2xl font-bold">Xiomi Smart Watch</h1>
                            <button className="btn btn-sm btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default Banner;

/*div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className="hero  col-span-2  row-span-2 rounded-lg bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Laptop} className="max-w-sm rounded-lg " />
                        <div>
                            <h1 className="text-5xl font-bold">Apple Macbook Pro Max</h1>
                            <button className="btn btn-sm btn-secondary">Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className='grid grid-rows-2 gap-y-3 rounded-lg'>
                    <div className=' bg-base-200 rounded-lg'>
                        <div className="hero   bg-base-200">
                            <div className="hero-content relative grid-cols-2">

                                <div>
                                    <h1 className="text-2xl font-bold absolute ">Xiomi Smart <br /> Watch</h1>
                                    <br />
                                    <div className='mt-32'>
                                        <button className="btn btn-sm btn-secondary">Shop Now</button>
                                    </div>
                                </div>
                                <div>
                                    <img src={watch1} className="max-w-sm w-full  rounded-lg " />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-base-200 rounded-lg'>
                        <div className="hero   bg-base-200">
                            <div className="hero-content relative grid-cols-2">

                                <div>
                                    <h1 className="text-2xl font-bold absolute ">Xiomi Smart <br /> Watch</h1>
                                    <br />
                                    <div className='mt-32'>
                                        <button className="btn w-28 btn-sm btn-secondary">Shop Now</button>
                                    </div>
                                </div>
                                <div>
                                    <img src={watch1} className="max-w-sm w-full  rounded-lg " />

                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

 //           </div> */