import React, { useState } from 'react';
import { Link, matchPath } from 'react-router-dom';
import moduleName, { FaCartArrowDown, FaHeart, FaSearch, FaSync, FaUser } from 'react-icons/fa';
import { } from './Navbar.css';


const Navar = () => {

    const pages = <>

        <li className='ml-8 m-r-2 text-[16px] '><Link to='/'>Home</Link></li>
        <li className='ml-8  text-[16px] '><Link>Shop</Link></li>
        <li className='mx-2'><Link>Seller</Link></li>
        <li className='mx-2'><Link>Blogs</Link></li>
        <li className='mx-2'><Link>About</Link></li>
        <li className='mx-2'><Link>Contact</Link></li>
    </>

    const options = <>
        <option disabled selected>Categories</option>
        <option><Link to='/categories'>AllCategores</Link></option>
        <option>Mobile</option>

        <option>Laptop</option>
        <option> Watch</option>
        <option> Shoes</option>
        <option>Garments</option>

    </>
    const form = <>
        <form className='flex'>
            <input type="text" placeholder="Type here" className="input input-bordered rounded-none w-3/5 max-w-xs" />
            <div className="form-control w-full max-w-xs">
                <select className="select rounded-none select-bordered w-full">
                    {options}
                </select>
            </div>
            <FaSearch className='bg-accent text-5xl'></FaSearch>
        </form>
    </>
    const icons = <>
        <div className='flex gap-x-5 items-center'>
            <div>
                <FaSync className='text-2xl text-secondary '></FaSync>
            </div>
            <div>
                <button className='btn'><FaHeart className='text-2xl text-secondary '></FaHeart></button>
            </div>
            <div>
                <button className='btn'><FaCartArrowDown className='text-2xl text-secondary '></FaCartArrowDown></button>
            </div>
            <div >
                <div className="dropdown relative">
                    <label tabIndex={0} className="btn m-1"><FaUser className='text-2xl text-secondary '></FaUser></label>
                    <ul tabIndex={0} className="dropdown-content absolute -left-9 menu p-2 shadow bg-base-100  w-52">
                        <Link className='pl-4 py-2 hover:bg-slate-300 font-bold' to='/login'>Login</Link>
                        <Link className='pl-4 py-2 hover:bg-slate-300 font-bold' to='/login'>Profile</Link>
                        <Link className='pl-4 py-2 hover:bg-slate-300 font-bold' to='/login'>Faq</Link>
                        <Link className='pl-4 py-2 w-full hover:bg-slate-300 font-bold' to='/login'>Log Out</Link>
                    </ul>
                </div>
            </div>
        </div>
    </>






    return (
        <div className=''>

            <div >
                <label tabIndex={0} className="btn m-1"><FaUser className='text-2xl '></FaUser> </label>
            </div>
            <header className='p-2 text-black p-x-3 border-b-2 mb-2 border-accent  lg:w-10/12 mx-auto px-0 '>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-8 text-[12px] sm:text[15px] gap-3'>
                        <Link className='hover:underline underline-offset-1'>Account</Link>
                        <Link className='hover:underline underline-offset-1'>Track order</Link>
                        <Link className='hover:underline underline-offset-1'>Support</Link>
                    </div>

                    <div>
                        <div className='hidden  lg:flex gap-6 font-bold'>
                            <p className='text-[14px]'>+01401035511</p>
                            <p className='fot text-[14px]'>mmishrat90@gmail.com</p>
                        </div>
                        <div className="navbar-end  lg:hidden">
                            <a className="btn btn-sm text-[9px] w-24 bg-secondary mr-0 font-bold">Become Seller</a>
                        </div>
                    </div>
                </div>
            </header>
            <header className='mb-3  lg:w-10/12 mx-auto'>
                <div className='flex justify-around md:justify-between'>
                    <div>
                        <p className='fot text-[20px] font-bold text-secondary lg:text-4xl'>Kino.cOm</p>
                    </div>
                    <div className='hidden md:flex'>
                        {
                            form
                        }
                    </div>
                    <div className='hidden md:flex'>
                        {
                            icons
                        }
                    </div>
                </div>
            </header>
            <div className='bg-secondary'>
                <div className="navbar px-0  flex justify-between w-10/12 mx-auto  text-black font-bold">
                    <div className="navbar-start w-auto">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-sm w-52">
                                <li><a>Item 1</a></li>

                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='hidden lg:flex '>
                        <div className="dropdown rounded-b-none mt-4  ] ">
                            <label tabIndex={0} className="bg-neutral px-20 pb-4 pt-4 rounded-t-lg m-1 hover:bg-accent">Categories</label>
                            <ul tabIndex={0} className="dropdown-content menu ml-1 mt-10 p-2 shadow bg-base-100  w-[232px]">
                                <Link className='pl-5 py-2  border-collapse rounded-sm hover:bg-secondary' to='/categories'>All Categories</Link>
                                <ul className='h-[.1px] bg-accent'></ul>
                                <Link className='pl-5 py-2  border-collapse rounded-sm hover:bg-secondary' to='/categories/Category/Laptop' >Laptop </Link>
                                <ul className='h-[.1px] bg-accent'></ul>
                                <Link className='pl-5 py-2  border-collapse rounded-sm hover:bg-secondary' to='/categories/Category/Mobiel Phones'>Mobile</Link>
                                <ul className='h-[.1px] bg-accent'></ul>
                                <Link className='pl-5 py-2  border-collapse rounded-sm hover:bg-secondary' to='/categories/Category/Cap'>Cap</Link>
                                <ul className='h-[.1px] bg-accent'></ul>
                                <Link className='pl-5 py-2  border-collapse rounded-sm hover:bg-secondary' to='/categories/Category/garments'>Garments</Link>
                                <ul className='h-[.1px] bg-accent'></ul>
                                <Link className='pl-5 py-2  border-collapse rounded-sm hover:bg-secondary' to='/categories/Category/toy'>Toy</Link>
                                <ul className='h-[.1px] bg-accent'></ul>
                                <Link className='pl-5 py-2  border-collapse rounded-sm hover:bg-secondary' to='/categories/Category/shoes'>Shoes</Link>
                                <ul className='h-[.1px] bg-accent'></ul>
                                <Link className='pl-5 py-2  border-collapse rounded-sm hover:bg-secondary' to='/categories/Category/Watch'>Watch</Link>

                            </ul>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        {
                            form
                        }
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                pages
                            }
                        </ul>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <a className="btn rounded-sm bg-warning border-none text-base-100 ">Become Seller</a>
                    </div>
                    <label htmlFor="categoriesDrawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>



                </div>
            </div>
        </div>
    );
};

export default Navar;