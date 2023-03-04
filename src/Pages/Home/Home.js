import React from 'react';
import Banner from './Banner';
import Others from './Others';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto md:w-10/12'>
           <Banner></Banner>
           <Others></Others>
        </div>
    );
};

export default Home;