// import Home from '../components/Home'
// import User from '../components/User'

export const routes = [
  // {
  //   path: '',
  //   component: Home
  // },
  // {
  //   path: '/user',
  //   component: User
  // }
  {
    path: '',
    component: () => import('../components/Home')
  },
  {
    path: '/user',
    component: () => import('../components/User')
  }
]
