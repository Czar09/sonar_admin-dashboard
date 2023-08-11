'use client';
import React, { useEffect } from 'react'

import Sidebar from '../components/Sidebar'
import AddProducts from '../components/AddProducts'
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Page = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const getSession = async () => {
    const { data: { session } } = await supabaseClient.auth.getSession();
    console.log(session);
    if (!session) {
      router.push('login');
    }
  }
  
  useEffect(() => {
    getSession();
  }, []);

  return (
    <>
      <div className='flex flex-col md:flex-row w-full  h-[100vh]'>
        <div className=' lg:w-[20%]  '> {/*#131313*/}
          <div className='md:h-[100vh] px-7 bg-gray-100 lg:fixed'>
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

export default Page