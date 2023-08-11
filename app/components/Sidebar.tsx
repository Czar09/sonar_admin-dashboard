'use client';
import React from 'react'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { RiListOrdered, RiProductHuntLine, RiPassportFill, RiPriceTag3Fill } from 'react-icons/ri'
import { PiMoneyBold } from 'react-icons/pi'
import Link from 'next/link'
import { useUser } from '@/utils/useUser'
const Sidebar = () => {

    const { isLoading, userDetails } = useUser();
    return (
        <>
            <div className='hidden md:inline'>
                <div className='flex items-center justify-center gap-2 py-2 my-3 border-b'>
                    <i className='text-black text-4xl'><MdOutlineAdminPanelSettings /></i>
                    <h2 className='text-black'>{userDetails?.role} DASHBOARD</h2>
                </div>
                {isLoading ? <div>Loading</div> : userDetails?.role == 'superAdmin' ?
                    (
                        <div className='flex flex-col'>
                            <Link className='' href="/admin">
                                <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                    <i className='text-2xl'><MdOutlineAdminPanelSettings /></i>
                                    Home
                                </div>
                            </Link>
                            <Link className='' href="/orders">
                                <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                    <i className='text-2xl'><RiListOrdered /></i>
                                    Live Orders
                                </div>
                            </Link>
                            <Link className='' href="/products">
                                <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                    <i className='text-2xl'><RiProductHuntLine /></i>
                                    Products
                                </div>
                            </Link>
                            <Link className='' href="/sellers">
                                <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                    <i className='text-2xl'><RiPassportFill /></i>
                                    Sellers
                                </div>
                            </Link>
                            <Link className='' href="/wholesalers">
                                <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                    <i className='text-2xl'><RiPassportFill /></i>
                                    WholeSalers
                                </div>
                            </Link>
                            <Link className='' href="/wholesaleorders">
                                <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                    <i className='text-2xl'><PiMoneyBold /></i>
                                    WholeSale Orders
                                </div>
                            </Link>
                            <Link className='' href="/wholesaleprice">
                                <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                    <i className='text-2xl'><RiPriceTag3Fill /></i>
                                    WholeSale Prices
                                </div>
                            </Link>
                            <Link className='' href="/sellerprice">
                                <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                    <i className='text-2xl'><RiPriceTag3Fill /></i>
                                    Seller Prices
                                </div>
                            </Link>
                        </div>
                    ) : userDetails?.role=='seller' ?
                    (
                        <div className='flex flex-col'>
                        <Link className='' href="/admin">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><MdOutlineAdminPanelSettings /></i>
                                Home
                            </div>
                        </Link>
                        {/* <Link className='' href="/orders">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><RiListOrdered /></i>
                                Live Orders
                            </div>
                        </Link> */}
                        <Link className='' href="/products">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><RiProductHuntLine /></i>
                                Products
                            </div>
                        </Link>
                        <Link className='' href="/wholesaleorders">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><PiMoneyBold /></i>
                                WholeSale Orders
                            </div>
                        </Link>
                        <Link className='' href="/wholesaleprice">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><RiPriceTag3Fill /></i>
                                WholeSale Prices
                            </div>
                        </Link>
                        <Link className='' href="/sellerprice">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><RiPriceTag3Fill /></i>
                                Seller Prices
                            </div>
                        </Link>
                    </div>
                    ) :  
                    (
                        <div className='flex flex-col'>
                        <Link className='' href="/admin">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><MdOutlineAdminPanelSettings /></i>
                                Home
                            </div>
                        </Link>
                        <Link className='' href="/products">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><RiProductHuntLine /></i>
                                Products
                            </div>
                        </Link>
                        <Link className='' href="/wholesaleorders">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><PiMoneyBold /></i>
                                WholeSale Orders
                            </div>
                        </Link>
                        <Link className='' href="/yourwholesaleprice">
                            <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                                <i className='text-2xl'><RiPriceTag3Fill /></i>
                               Your WholeSale Prices
                            </div>
                        </Link>
                    </div>
                    )}

            </div>

            {/* for mobile */}
            <div className='inline md:hidden'>
                {/* <div className='flex items-center justify-center gap-2 py-2 my-3 border-b'>
                    <i className='text-black text-xl'><MdOutlineAdminPanelSettings /></i>
                    <h2 className='text-black'>ADMIN DASHBOARD</h2>
                </div> */}
                <div className='flex justify-between'>
                    <Link className='' href="/admin">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                            {/* <i className='text-sm'><MdOutlineAdminPanelSettings/></i> */}
                            Home
                        </div>
                    </Link>
                    <Link className='' href="/orders">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                            {/* <i className='text-sm'><RiListOrdered/></i> */}
                            Orders
                        </div>
                    </Link>
                    <Link className='' href="/sales">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                            {/* <i className='text-sm'><FcSalesPerformance/></i> */}
                            Sales
                        </div>
                    </Link>
                    <Link className='' href="/products">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                            {/* <i className='text-sm'><RiProductHuntLine/></i> */}
                            Products
                        </div>
                    </Link>
                    <Link className='' href="/future-arrivals">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                            {/* <i className='text-sm'><SiFuturelearn/></i> */}
                            Future Arrivals
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar