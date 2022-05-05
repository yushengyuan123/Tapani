import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory
} from "vue-router"
import AppIndex from "@/pages/Index/Index.vue"
import VideoIndex from "@/pages/VideoPlayer/Index.vue"
import Settings from "@/pages/Settings/Settings.vue"

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/settings'
  },
  {
    path: '/index',
    name: 'app-index',
    component: AppIndex
  },
  {
    path: '/video',
    name: 'video-index',
    component: VideoIndex
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
