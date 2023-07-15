"use client";
import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import AdminMain from '../components/AdminMain'
import { GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useUser } from '@/utils/useUser'
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { supabaseAdmin } from '@/utils/supabase-admin';

const AdminDash =  () => {
  const {order, userDetails}= useUser();
  console.log("order");
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const getSession = async () => {
    console.log("session");
    const session = await supabaseAdmin.auth.getSession();
    if(!session){
      router.push('/login');
    }
  }
  
  useEffect(() => {
    getSession();
  }, [order, userDetails])

  return (
    <>
        <div className='flex flex-col md:flex-row w-full  h-[100vh]'>
            <div className=' lg:w-[20%]  '> {/*#131313*/}
                <div className='md:h-[100vh] px-7 bg-gray-100 md:fixed'>
                   <Sidebar />
                </div>
            </div>
            <div className='w-full '>
                <AdminMain />
            </div>
        </div>
    </>
  )
}

export default AdminDash
