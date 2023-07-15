import { MyUserContextProvider } from '@/utils/useUser'
import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import Provider from './provider'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (

    <Provider>
      <MyUserContextProvider>
        <html lang="en">
          <head>
            <meta
              name="robots"
              content="noindex"
            />
          </head>
          <body className={inter.className}>{children}</body>
        </html>
      </MyUserContextProvider>
    </Provider>
  )
}
