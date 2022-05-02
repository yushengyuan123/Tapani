import {Command} from "~"

const template: AppMenuOption[] = [
  {
    id: 'menu.app',
    label: 'xxx',
  },
  {
    id: 'menu.file',
    label: '文件',
    submenu: [
      {
        id: 'file.select',
        label: '打开文件',
        command: Command.APPLICATION_OPEN_FILE
      },
      {
        id: 'folder.select',
        label: '打开文件夹',
        command: Command.APPLICATION_OPEN_FILE
      },
    ]
  }
]

export default template