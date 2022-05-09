import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory
} from "vue-router"
import AppIndex from "@/pages/Index/Index.vue"
import VideoIndex from "@/pages/VideoPlayer/Index.vue"
import Settings from "@/pages/Settings/Settings.vue"
import AppSetting from "@/pages/Settings/SettingsMain/AppSetting/AppSetting.vue"
import MediaSetting from "@/pages/Settings/SettingsMain/MediaSetting/MediaSetting.vue"

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
    name: 'settings-index',
    component: Settings,
    redirect: '/app',
    children: [
      {
        path: '/app',
        name: 'app-setting',
        component: AppSetting
      },
      {
        path: '/media',
        name: 'media-setting',
        component: MediaSetting
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
