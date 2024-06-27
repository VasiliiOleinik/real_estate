import { useMutation, useQuery } from 'react-query'
import { deleteRealEstateById, getRealEstateById } from '../../api/Estates'
import { useNavigate, useParams } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { getCookie } from '../../utils/cookies'

export const useEstatePage = () => {
  const navigate = useNavigate()
  const user = jwtDecode(getCookie('token'))
  const { id } = useParams()

  const { data: estate = [], isLoading } = useQuery(
    ['estates', id],
    getRealEstateById,
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
    }
  )

  const deleteEstate = useMutation({
    mutationFn: deleteRealEstateById,
    onSuccess: () => {
      navigate('/')
    },
  })

  const showDeleteBtn = user?.id === estate?.author

  return {
    estate,
    isLoading,
    showDeleteBtn,
    deleteEstate,
  }
}
