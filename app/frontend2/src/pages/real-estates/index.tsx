import RootLayout from '@/components/RootLayout'
import { withAuth } from '@/utils/withAuth'
import React from 'react'
import useRealEstates from '@/hooks/useRealEstates'
import LoadingEstates from './LoadingEstates'
import NoData from '@/components/NoData'
import EstateCard from '@/components/EstateCard.tsx'

export const metadata = {
  title: 'Real estate Home Page',
  description: 'The official Next.js Course Dashboard, built with App Router.'
}

const { WithAuth, getServerSideProps } = withAuth(RealEstates)

function RealEstates() {
  const { isLoading, estates } = useRealEstates()

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
          ? estates.map((estate: any, id: any) => <EstateCard {...estate} key={id} />)
          : null}
      </div>
    </RootLayout>
  )
}

export default WithAuth
export { getServerSideProps }
