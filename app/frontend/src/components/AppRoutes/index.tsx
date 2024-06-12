import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../utils/cookies'

export const AppRoutes = () => {
  const navigate = useNavigate()
  const token = getCookie('token')

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [navigate, token])

  return (
    <Routes>
      {routes.map(({ path, component: Component, exact }) => (
        <Route key={path} path={path} exact={exact} element={<Component />} />
      ))}
    </Routes>
  )
}
