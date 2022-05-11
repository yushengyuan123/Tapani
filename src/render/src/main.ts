import { createApp } from 'vue'
import * as _ from 'lodash'
import type {
  App as AppOps
} from "vue"
import App from './pages/App.vue'

/** Store Style Import*/
import store from "./store"

/** Router Import*/
import router from './router/index'

/** Icons Style Import*/
import iconCollect from "./components/Icons/entry"
import Icons from '@/components/Icons/Index.vue'

/** Css Style Import*/
import '@/components/Theme/Main.less'

/** Element Plus Import */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/** Commands Import */
import registerCommands from './command'

/** Directives Import */
import directives from "./directives"

/** I18n Import */
import { setupI18n } from './language'

function initElementPlus(app: AppOps) {
  app.use(ElementPlus)
}

function initIcons(app: AppOps) {
  _.forOwn(iconCollect, (value, key) => {
    app.component(key, value)
  })

  app.component('icon-collect', Icons)
}

function initDirectives(app: AppOps) {
  _.forOwn(directives, (value, key) => {
    app.directive(key, value)
  })
}

function initVueApplication() {
  const app = createApp(App)
  
  app.use(router)
  
  app.use(store)
  
  initElementPlus(app)
  
  initDirectives(app)
  
  initIcons(app)

  app.use(setupI18n())
  
  registerCommands()
  
  app.mount('#app')
}

initVueApplication()
