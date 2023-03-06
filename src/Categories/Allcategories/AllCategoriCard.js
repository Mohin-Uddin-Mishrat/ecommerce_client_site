import React from 'react';
import { FaCartPlus, FaHeart, FaShippingFast, FaSync } from 'react-icons/fa';
import watch from '../../Assets/w6-removebg-preview.png';

const AllCategoriCard = ({product}) => {
    const {_id,title,price,image,decription,categoryName} =product
    return (
        <div >
            <div className="card group relative h-[400px] w-auto bg-base-100 shadow-xl ">
                <figure><img src={image} className='h-4/5'  alt="Shoes" /></figure>
                    <div className='absolute right-0 translate-x-10 opacity-0 top-[30%] grid grid-cols-1 gap-3 group-hover:-translate-x-8 duration-700 group-hover:opacity-100'>
                        <div className='p-2 bg-secondary rounded-lg text-2xl'>
                            <FaHeart></FaHeart>
                        </div >
                        <div className='p-2 bg-secondary rounded-lg text-2xl'>
                            <FaSync></FaSync>
                        </div>
                        <div className='p-2 bg-secondary rounded-lg text-2xl'>
                            <FaCartPlus></FaCartPlus>
                        </div>
                    </div>
                    <div className="card-body  h-32   ">
                        <h2 className="card-title absolute bottom-16"> {title}   </h2>
                        <p className='fot font-bold absolute bottom-7 '><span className='text-secondary'>Price :</span>${price}</p>
                        <div className="card-actions flex justify-center w-full absolute bottom-3  right-0 translate-y-12 opacity-0   group-hover:opacity-100 group-hover:-translate-y-2 duration-[500ms]  ">
                            <button className='text-center w-4/5 btn-sm py-2 bg-secondary btn focus:bg-accent'><span> <FaShippingFast></FaShippingFast> </span> Add To Cart</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default AllCategoriCard;