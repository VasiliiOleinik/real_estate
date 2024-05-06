import { getRealEstateById } from '@/api/Estates'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

export const useEstatePage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data: estate = [], isLoading } = useQuery(['estates', id], getRealEstateById, {
    enabled: !!id,
    refetchOnWindowFocus: false
  })

  return {
    estate,
    isLoading
  }
}
