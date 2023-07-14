'use client'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { AppProps } from 'next/app'
import React, {  useState } from 'react'

type Props = {}

function Provider({
    children,
  }: {
    children: React.ReactNode
  }) {

    
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  
    return (

        <SessionContextProvider
            supabaseClient={supabaseClient}
        >
            {children}
        </SessionContextProvider>
    )
}

export default Provider