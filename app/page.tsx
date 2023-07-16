import { GetServerSidePropsContext } from 'next';
import AdminDash from './admin/page'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default function Home() {
  return (
    <main className="p-4">
      <AdminDash />
    </main>
  )
}



