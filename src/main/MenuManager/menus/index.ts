import {
  Command
} from "~/share/index"

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
      }
    ]
  },
  {
    id: 'menu.volume',
    label: '声音',
  },
  {
    id: 'menu.capture',
    label: '截图',
  },
  {
    id: 'menu.help',
    label: '帮助',
  },
]

export default template
