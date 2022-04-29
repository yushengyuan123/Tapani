import { createApp } from 'vue'
import * as _ from 'lodash'
import type {
  App as AppOps
} from "vue"
import App from './pages/App.vue'

/** Icons Style Import*/
import iconCollect from "./components/Icons/entry"
import Icons from '@/components/Icons/Index.vue'

/** Css Style Import*/
import '@/components/Theme/Main.less'

/** Element Plus Import */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

function initElementPlus(app: AppOps) {
  app.use(ElementPlus)
}

function initIcons(app: AppOps) {
  _.forOwn(iconCollect, (value, key) => {
    console.log(key, value)
    app.component(key, value)
  })

  app.component('icon-collect', Icons)
}

function initVueApplication() {
  const app = createApp(App)
  
  initElementPlus(app)
  
  initIcons(app)
  
  app.mount('#app')
}

initVueApplication()