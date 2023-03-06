import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Loader';
import AllCategoriCard from './AllCategoriCard';

const Allcategories = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }

    
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(product =>
                    <AllCategoriCard key={product._id} product={product}></AllCategoriCard>

                )
            }
        </div>
    );
};

export default Allcategories;