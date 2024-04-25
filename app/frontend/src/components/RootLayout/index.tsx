import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real Eatate App',
  description: 'Real Eatate App built with Next.js and Tailwind CSS.'
}

type RootLayoutProps = {
  metadata: {
    title: string
    description: string
  }
  children: React.ReactNode
}

export default function RootLayout({ children, metadata }: Readonly<RootLayoutProps>) {
  const { title, description } = metadata

  return (
    <>
      <Head>
        <title>{title || 'Real estate portal'}</title>
        <meta name="description" content={description || 'Find the best real estate'}></meta>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="real_estate, home, house, flat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={inter.className}>
        <header>{/* Add your header here */}</header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <footer>{/* Add your footer here */}</footer>
      </div>
    </>
  )
}
