import React from 'react'
import {MdOutlineAdminPanelSettings} from 'react-icons/md'
import {RiListOrdered, RiProductHuntLine} from 'react-icons/ri'
import {FcSalesPerformance} from 'react-icons/fc'
import {SiFuturelearn} from 'react-icons/si'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <>
        <div className='hidden md:inline'>
        <div className='flex items-center justify-center gap-2 py-2 my-3 border-b'>
                    <i className='text-black text-4xl'><MdOutlineAdminPanelSettings /></i>
                    <h2 className='text-black'>ADMIN DASHBOARD</h2>
                </div>
                <div className='flex flex-col'>
                    <Link className='' href="/admin">
                        <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                        <i className='text-2xl'><MdOutlineAdminPanelSettings/></i>
                        Home
                    </div>
                    </Link>
                    <Link className='' href="/orders">
                        <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                        <i className='text-2xl'><RiListOrdered/></i>
                        Orders
                    </div>
                    </Link>
                    <Link className='' href="/sales">
                        <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                        <i className='text-2xl'><FcSalesPerformance/></i>
                        Sales
                    </div>
                    </Link>
                    <Link className='' href="/products">
                        <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                        <i className='text-2xl'><RiProductHuntLine/></i>
                        Products
                    </div>
                    </Link>
                    <Link className='' href="/future-arrivals">
                        <div className='flex justify-start gap-3 hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-4 text-black font-light'>
                        <i className='text-2xl'><SiFuturelearn/></i>
                        Future Arrivals
                    </div>
                    </Link>
                </div>
        </div>

        {/* for mobile */}
        <div className='inline md:hidden'>
        {/* <div className='flex items-center justify-center gap-2 py-2 my-3 border-b'>
                    <i className='text-black text-xl'><MdOutlineAdminPanelSettings /></i>
                    <h2 className='text-black'>ADMIN DASHBOARD</h2>
                </div> */}
                <div className='flex justify-between'>
                    <Link className='' href="#">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                        {/* <i className='text-sm'><MdOutlineAdminPanelSettings/></i> */}
                        Home
                    </div>
                    </Link>
                    <Link className='' href="#">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                        {/* <i className='text-sm'><RiListOrdered/></i> */}
                        Orders
                    </div>
                    </Link>
                    <Link className='' href="#">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                        {/* <i className='text-sm'><FcSalesPerformance/></i> */}
                        Sales
                    </div>
                    </Link>
                    <Link className='' href="#">
                        <div className='flex text-sm justify-start  hover:bg-indigo-500 hover:text-white rounded-lg cursor-pointer transition-all duration-300 mt-2 py-3 px-1 text-black font-light'>
                        {/* <i className='text-sm'><RiProductHuntLine/></i> */}
                        Products
                    </div>
                    </Link>
                    <Link className='' href="#">
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