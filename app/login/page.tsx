"use client";
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import SignIn from '../components/SignIn'



type Props = {}


export default function SignInUser({ }: Props) {

  const router = useRouter();
  const supabaseClient = useSupabaseClient();


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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session)
    return {
      redirect: {
        destination: '/admin',
        permanent: false
      }
    };

  return {
    props: {
      initialSession: session,
    }
  };
}