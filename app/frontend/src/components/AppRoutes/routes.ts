import CreateRealEstate from '../../pages/CreateRealEstate'
import EstatePage from '../../pages/EstatePage'
import { Home } from '../../pages/Home'
import Login from '../../pages/Login'
import UserPage from '../../pages/UserPage'

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
  {
    path: '/:id',
    component: EstatePage,
    exact: true,
  },
  {
    path: '/create-estate',
    component: CreateRealEstate,
    exact: true,
  },
  {
    path: '/user',
    component: UserPage,
    exact: true,
  },
]
