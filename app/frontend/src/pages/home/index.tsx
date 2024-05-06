import RootLayout from '@/components/RootLayout'
import { withAuth } from '@/utils/withAuth'
import { Metadata } from 'next'
import React from 'react'
import { useHome } from './useHome'
import LoadingEstates from './LoadingEstates'
import NoData from '@/components/NoData'
import EstateCard from '@/components/EstateCard.tsx'

export const metadata: Metadata = {
  title: 'Real estate Home Page',
  description: 'The official Next.js Course Dashboard, built with App Router.'
}

const { WithAuth, getServerSideProps } = withAuth(Home)

function Home() {
  const { isLoading, estates } = useHome()

  return (
    <RootLayout metadata={metadata}>
      {isLoading ? (
        <div className="grid grid-cols-4 gap-4">
          <LoadingEstates />
        </div>
      ) : null}

      {!isLoading && !estates.length ? <NoData /> : null}

      <div className="grid grid-cols-4 gap-4">
        {!isLoading && estates.length
          ? estates.map((estate, id) => <EstateCard {...estate} key={id} />)
          : null}
      </div>
    </RootLayout>
  )
}

export default WithAuth
export { getServerSideProps }
