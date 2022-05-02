interface AppMenuOption {
  id: string,
  label: string,
  command?: CommandTypes,
  submenu?: AppMenuOption[],
  click?: Function,
}


