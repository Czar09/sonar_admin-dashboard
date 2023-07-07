import React from 'react'
import Sidebar from '../components/Sidebar'
import AddProducts from '../components/AddProducts'

const page = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row w-full  h-[100vh]'>
        <div className=' lg:w-[20%]  '> {/*#131313*/}
            <div className='md:h-[100vh] px-7 bg-gray-100 md:fixed'>
               <Sidebar />
            </div>
        </div>
        <div className='w-full '>
            <AddProducts />
        </div>
    </div>
    </>
  )
}

export default page