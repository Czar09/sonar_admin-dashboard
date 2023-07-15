"use client";
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import SignIn from '../components/SignIn'
import { supabaseAdmin } from '@/utils/supabase-admin';



type Props = {}


export default function SignInUser({ }: Props) {

  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const getSession = async () => {
    console.log("session");
    const session = await supabaseAdmin.auth.getSession();
    if(session){
      router.push('/admin');
    }
  }
  
  useEffect(() => {
    getSession();
  }, [])

  return (
    <div className=' h-screen'>
      <Head>
        <title>
          SignIn: Sonar Admin
        </title>
        <meta
          name="robots"
          content="noindex"
        />
        <link rel="icon" href="7svar1.png" />
      </Head>
      <SignIn/>
    </div>
  )
}

