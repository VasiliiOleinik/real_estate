import { useQuery } from 'react-query'
import { getRealEstateById } from '../../api/Estates'
import { useParams } from 'react-router-dom'

export const useEstatePage = () => {
  const { id } = useParams()

  const { data: estate = [], isLoading } = useQuery(
    ['estates', id],
    getRealEstateById,
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
    }
  )

  return {
    estate,
    isLoading,
  }
}
