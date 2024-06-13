import { Route } from 'react-router-dom'

export const routesMapper = (routes: any) =>
  routes.map((route: any, i: any) => <Route key={i} {...route} />)
