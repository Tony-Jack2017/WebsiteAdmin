import Login from '@/pages/common/Login/Login'
import Error from '@/pages/common/Error/Error'
import Dashboard from '@/pages/normal/Dashboard'
import Test from '@/pages/normal/Test'

interface RouteMeta {
    title: string
}

export interface RouteProps {
    path: string,
    layout?: string,
    exact?: boolean,
    component?: any,
    meta?: RouteMeta,
    routes?: Array<RouteProps>
}

const routes: Array<RouteProps> = [
  {
    path: 'login',
    component: Login,
    meta: {
      title: '登陆界面'
    }
  },
  {
    path: '404',
    component: Error,
    meta: {
      title: '未找到网页'
    }
  },
  {
    path: '/',
    component: Dashboard,
    routes: [
      {
        path: 'dashboard',
        component: Dashboard,
        meta: {
          title: '数据看板'
        }
      },
      {
        path: 'test',
        component: Test,
        meta: {
          title: '测试界面'
        }
      }
    ]
  }
]

export default routes
