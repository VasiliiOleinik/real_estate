import EstateCardSkeleton from '@/components/EstateCardSkeleton'
import React from 'react'

export default function LoadingEstates() {
  const estates = Array.from({ length: 4 }, (_, i) => i)

  return (
    <>
      {estates.map(el => (
        <EstateCardSkeleton key={el} />
      ))}
    </>
  )
}
