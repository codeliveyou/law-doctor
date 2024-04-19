import type { Metadata } from 'next'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { Inter, DM_Sans } from 'next/font/google'
import ToastContainer from '@/components/common/ToastContainer';
const inter = Inter({ subsets: ['latin'], variable: '--font-custom-inter' })
const dm_sans = DM_Sans({ subsets: ['latin'], variable: '--font-custom-dmsans' })

export const metadata: Metadata = {
  title: 'Orthos',
  description: 'Orthos App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/clash-display.css" />
        <link rel="icon" href="/images/Orthos-Logogram.png" />
      </head>
      <body className={`${inter.variable} ${dm_sans.variable} font-inter`}>
        <Theme radius="small" appearance="dark" accentColor="blue">
          {children}
        </Theme>

        <ToastContainer />
      </body>
    </html>
  )
}
