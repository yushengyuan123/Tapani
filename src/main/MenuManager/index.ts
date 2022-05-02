import type {MenuItemConstructorOptions,} from 'electron'
import { Menu } from 'electron'
import template from "./menus"

const handleCommand = (item: AppMenuOption) => {
  const command = item.command
  // @ts-ignore
  global.application.sendCommandToAll(command)
}

const translateTemplate = 
  (template: AppMenuOption[]): MenuItemConstructorOptions[] =>{
    const menuTemplate: MenuItemConstructorOptions[] = []
    
    template.forEach(item => {
      const menuTemplateItem: MenuItemConstructorOptions = {
        label: item.label,
        id: item.id,
      }
      
      if (item.command) {
        menuTemplateItem.click = () => {
          handleCommand(item)
        }
      }
      
      if (item.submenu) {
        menuTemplateItem.submenu = translateTemplate(item.submenu)
      }
  
      menuTemplate.push(menuTemplateItem)
    })
    
    return menuTemplate
  }
  
export default class MenuManager {
  template!: AppMenuOption[]
  
  constructor() {
    this.load()
 
    this.setup()
  }
  
  load() {
    this.template = template
  }
  
  build() {
    return Menu.buildFromTemplate(translateTemplate(this.template))
  }
  
  setup() {
    const menu = this.build()
    Menu.setApplicationMenu(menu)
  }
  
}