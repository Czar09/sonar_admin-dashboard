"use client";
import React from 'react'
import Sidebar from '../components/Sidebar'
import AdminMain from '../components/AdminMain'
import { GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useUser } from '@/utils/useUser'

const AdminDash = () => {
  const {order, userDetails}= useUser();
  console.log(order);
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
console.log(session);
  return {
    props: {
      initialSession: session,
    }
  };
}