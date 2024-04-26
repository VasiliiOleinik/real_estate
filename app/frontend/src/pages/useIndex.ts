import { getRealEstates } from '@/api/Estates'
import { useQuery } from 'react-query'

export const useIndex = () => {
  const { data: estates = [], isLoading } = useQuery('estates', getRealEstates, {
    enabled: true,
    refetchOnWindowFocus: false
  })

  console.log('estates', estates)
  return {}
}
