import React from 'react';
import { FaBaby, FaCcAmazonPay, FaCheck, FaHatCowboy, FaLaptop, FaLessThan, FaMobile, FaPalfed, FaShippingFast, FaStopwatch } from 'react-icons/fa';

const Others = () => {
    const category = [
        {
            name: "Laptop",
            icon: <FaLaptop></FaLaptop>
        },
        {
            name: "Mobile",
            icon: <FaMobile></FaMobile>
        },
        {
            name: "Kids Toy",
            icon: <FaBaby></FaBaby>
        },
        {
            name: "Watch",
            icon: <FaStopwatch></FaStopwatch>
        },
        {
            name: "Dress",
            icon: <FaPalfed></FaPalfed>
        },
        {
            name: "Caps",
            icon: <FaHatCowboy></FaHatCowboy>
        }
    ]


    return (
        <div>
            <div className='grid grid-cols-1 gap-5 py-7 my-9 bg-neutral rounded-sm lg:grid-cols-4'>
                <div className='flex   items-center'>
                    <div className='text-5xl mx-5'>
                        <FaShippingFast className='text-secondary'></FaShippingFast>
                    </div>
                    <div>
                        <h2 className='font-bold fot'> Free Shiping</h2>
                        <h2> Free Shiping on Paymet</h2>
                    </div>
                </div>
                <div className='flex   items-center'>
                    <div className='text-5xl mx-5'>
                        <FaLessThan className='text-secondary'></FaLessThan>
                    </div>
                    <div>
                        <h2 className='font-bold fot'> Return Policy

                        </h2>
                        <h2> 24 Hours Return Policy

                        </h2>
                    </div>
                </div>
                <div className='flex   items-center'>
                    <div className='text-5xl mx-5'>
                        <FaCcAmazonPay className='text-secondary'></FaCcAmazonPay>
                    </div>
                    <div>
                        <h2 className='font-bold fot'> Secured Payment</h2>
                        <h2> Secure Card Payments</h2>
                    </div>
                </div>
                <div className='flex   items-center'>
                    <div className='text-5xl mx-5'>
                        <FaCheck className='text-secondary'></FaCheck>
                    </div>
                    <div>
                        <h2 className='font-bold fot'> Best Quality</h2>
                        <h2> Best Quality Products</h2>
                    </div>
                </div>


            </div>
            <div className='my-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-16'>
                {
                    category.map((value, index) =>
                        <div className=''>
                            <div className='bg-neutral py-10 my-2 grid justify-items-center'>
                                <div className='text-5xl text-info'>
                                    {value.icon}
                                </div>
                            </div>
                            <div className='text-center'>
                                <h1 className='fot font-bold'>{value.name}</h1>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Others;