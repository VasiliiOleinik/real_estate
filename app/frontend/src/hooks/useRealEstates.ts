import { getRealEstates } from '../../../frontend/src/api/Estates'
import { useQuery } from 'react-query'
import React from 'react'

const useRealEstates = () => {
  const { data: estates = [], isLoading } = useQuery(
    'estates',
    getRealEstates,
    {
      enabled: true,
      refetchOnWindowFocus: false,
    },
  )

  return {
    isLoading,
    estates,
  }
}
export default useRealEstates
