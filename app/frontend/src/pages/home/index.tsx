import RootLayout from '@/components/RootLayout'
import { withAuth } from '@/utils/withAuth'
import { Metadata } from 'next'
import React from 'react'
import { useHome } from './useHome'

export const metadata: Metadata = {
  title: 'Real estate Home Page',
  description: 'The official Next.js Course Dashboard, built with App Router.'
}

const { WithAuth, getServerSideProps } = withAuth(Home)

function Home() {
  const { } = useHome()
  return (
    <RootLayout metadata={metadata}>
      <p>Home page</p>
    </RootLayout>
  )
}

export default WithAuth
export { getServerSideProps }
