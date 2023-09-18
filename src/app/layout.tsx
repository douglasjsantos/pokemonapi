import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className='flex justify-between max-w-5xl mx-auto my-4'>
        <p className='flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30
dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4
lg:dark:bg-zinc-800/30'>Pokemon API</p>
        <nav className="flex gap-4">
          <Link href="/" className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bordergray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral800/30'>Home</Link>
          <Link href="/sobre" className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bordergray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral800/30'>Sobre</Link>
        </nav>
      </header>
      <main className='mx-auto max-w-5x'>
        {children}
      </main>
      
      </body>
    </html>
  )
}
