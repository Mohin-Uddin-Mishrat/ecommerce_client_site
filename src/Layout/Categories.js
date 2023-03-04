import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navar from '../Shared/Navar';

const Categories = () => {
    return (
        <div >
            <Navar></Navar>
            <div className="drawer drawer-mobile mt-6 mx-11/12 mx-auto lg:w-10/12">
                <input id="categoriesDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-6 ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-lg  shadow-cyan-500/50">
                    <label htmlFor="categoriesDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 shadow-black bg-slate-100   text-base-content">
                        <Link className='pl-5 py-2  border-collapse rounded-sm font-bold hover:bg-secondary' to='/categories'>All Categories</Link>
                        <ul className='h-[.1px] bg-accent'></ul>
                        <Link className='pl-5 py-2  border-collapse rounded-sm font-bold hover:bg-slate-100' to='/categories'>Laptop</Link>
                        <ul className='h-[.1px] bg-accent'></ul>
                        <Link className='pl-5 py-2  border-collapse rounded-sm font-bold hover:bg-secondary' to='/categories'>Mobile</Link>
                        <ul className='h-[.1px] bg-accent'></ul>
                        <Link className='pl-5 py-2  border-collapse rounded-sm font-bold hover:bg-secondary' to='/categories'>Kids Toys</Link>
                        <ul className='h-[.1px] bg-accent'></ul>
                        <Link className='pl-5 py-2  border-collapse rounded-sm font-bold hover:bg-secondary' to='/categories'>Garments</Link>
                        <ul className='h-[.1px] bg-accent'></ul>
                        <Link className='pl-5 py-2  border-collapse rounded-sm font-bold hover:bg-secondary' to='/categories'>Watch</Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Categories;