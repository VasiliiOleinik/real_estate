import { Route } from 'react-router-dom'

export const routesMapper = (routes) =>
  routes.map((route, i) => <Route key={i} {...route} />)
