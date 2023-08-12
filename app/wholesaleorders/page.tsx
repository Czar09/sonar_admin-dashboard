'use client';
import React from 'react'
import Sidebar from '../components/Sidebar'
import WholesaleOrdersComp from '../components/WholesaleOrdersComp'
import { useUser } from '@/utils/useUser'
import { useRouter } from 'next/navigation';

const Index = () => {
    const {isLoading, userDetails}= useUser();
    const router = useRouter();

    if(isLoading){
        return <div>Loading...</div>
    }
    if(!userDetails){
        router.push('/login')
    }
    if(userDetails?.role !='superAdmin' || userDetails?.role !='admin'){
        router.push('/wholesaleorders/your-orders')
    }
  return (
    <>
    <div className='flex flex-col md:flex-row w-full  h-[100vh]'>
        <div className=' lg:w-[20%]  '> {/*#131313*/}
            <div className='md:h-[100vh] px-7 bg-gray-100 lg:fixed'>
               <Sidebar />
            </div>
        </div>
        <div className='w-full '>
            <WholesaleOrdersComp />
        </div>
    </div>
</>
)
}

export default Index