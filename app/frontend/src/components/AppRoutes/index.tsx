import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../utils/cookies'
import Login from '../../pages/Login'
import Navigation from '../Navigation'

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
      {routes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            !token ? (
              <Login />
            ) : (
              <div>
                <Navigation />
                <Component />
              </div>
            )
          }
        />
      ))}
    </Routes>
  )
}
