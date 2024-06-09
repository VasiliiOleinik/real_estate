import RootLayout from '@/components/RootLayout'
import { withAuth } from '@/utils/withAuth'
import { Metadata } from 'next'
import React from 'react'

import { useCreateRealEstate } from './useCreateRealEstate'
import UploadImage from '@/components/UploadImage'
import ImageCard from './ImageCard'

export const metadata: Metadata = {
  title: 'Create new Real Estate',
  description: 'The official Next.js Course Dashboard, built with App Router.'
}

const { WithAuth, getServerSideProps } = withAuth(CreateRealEstate)

function CreateRealEstate() {
  const { onImageInputChange, isLoading, fields, estateID } = useCreateRealEstate()

  return (
    <RootLayout metadata={metadata}>
      <p className="text-white">{estateID}</p>
      <div className="grid grid-cols-5 gap-4">
        {fields.map(({ url, id }) => (
          <ImageCard key={id} image={url} />
        ))}
        <UploadImage onInputChange={onImageInputChange} isLoading={isLoading} />
      </div>
    </RootLayout>
  )
}

export default WithAuth
export { getServerSideProps }
