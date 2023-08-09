import React from 'react'
import Sidebar from '../components/Sidebar'
import WholeSellerComp from '../components/WholeSellerComp'

const page = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row w-full  h-[100vh]'>
        <div className=' lg:w-[20%]  '> {/*#131313*/}
            <div className='md:h-[100vh] px-7 bg-gray-100 lg:fixed'>
               <Sidebar />
            </div>
        </div>
        <div className='w-full '>
            <WholeSellerComp />
        </div>
    </div>
    </>
  )
}

export default page