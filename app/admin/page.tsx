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
import Head from 'next/head';

const AdminDash =  () => {
  const {order, userDetails}= useUser();
  console.log("order");
  const router = useRouter();
  const supabase = useSupabaseClient();
  const getSession = async () => {
    const {data:{session}} = await supabase.auth.getSession();
    console.log(session);
    if(!session){
      router.push('login');
    }
  }
  
  useEffect(() => {
    getSession();
  }, []);

  return (
    <>
      <Head>
        <title>
          Admin: Sonar Admin
        </title>
      </Head>
        <div className='flex flex-col md:flex-row w-full  h-[100vh]'>
            <div className=' lg:w-[20%]  '> {/*#131313*/}
                <div className='md:h-[100vh] px-7 bg-gray-100 lg:fixed'>
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
