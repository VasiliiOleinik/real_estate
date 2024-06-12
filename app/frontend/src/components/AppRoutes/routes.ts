import { Home } from '../../pages/Home'
import Login from '../../pages/Login'

export const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
]
