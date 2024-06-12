import { useQuery } from 'react-query'
import { getRealEstates } from '../../api/Estates'

export const useHome = () => {
  const { data: estates = [], isLoading } = useQuery(
    'estates',
    getRealEstates,
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  )

  return {
    isLoading,
    estates,
  }
}
