import React from 'react';
import { FaCartPlus, FaHeart, FaSync } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const data = useLoaderData();
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(card =>
                    Card(card)
                )
            }
        </div>
    );
};

export default Category;

const Card = (card) => {
    const { title, price, image } = card
    return (
        <div className="card relative w-auto h-[400px] bg-base-100 shadow-xl group">
            <figure><img src={image} className='h-[80%]' alt="Shoes" /></figure>
            <div className="card-body ">
                <div className='grid grd-cols-1 gap-4 absolute -right-10 top-[100px] opacity-0 group-hover:right-5 duration-500 group-hover:opacity-100'>
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
                <h2 className="card-title fot  absolute bottom-12"> {title}</h2>
                <h2 className="card-title fot text-secondary absolute bottom-5"> Price: ${price}</h2>
                <div className="card-actions w-5/6 absolute -bottom-12 opacity-0 group-hover:bottom-5 duration-500 group-hover:opacity-100  ">
                    <button className='btn btn-sm  w-full bg-secondary '>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};