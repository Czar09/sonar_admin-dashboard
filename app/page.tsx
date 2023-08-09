import { GetServerSidePropsContext } from 'next';
import AdminDash from './admin/page'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default function Home() {
  return (
    <main className="">
      <AdminDash />
    </main>
  )
}



