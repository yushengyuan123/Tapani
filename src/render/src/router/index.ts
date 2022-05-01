import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory
} from "vue-router"
import AppIndex from "@/pages/Index/Index.vue"
import VideoIndex from "@/pages/VideoPlayer/Index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/video'
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router