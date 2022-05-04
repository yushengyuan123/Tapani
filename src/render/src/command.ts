import { commandsManager } from "./components/CommonManager/instance"
import {
  ref
} from "vue"
import { useVideoInfo } from "./store/videoInfo"
import { storeToRefs } from 'pinia'
import { useFileSystemAccess } from "@vueuse/core"
import fileStreamManager from "./buffer"
import {
  Command,
  VideoSelectArgs,
} from "../../share/index.ts"
import {
  IpcRendererListener
} from "types"
import fileModuleApi from "./api/fileApi"

console.log(Command)

const videoSelectFromMenu: IpcRendererListener<VideoSelectArgs> = (event, args) => {
  const videStore = useVideoInfo()
  const { videoBlobAddress } = storeToRefs(videStore)
  
  fileModuleApi.fetchFile(args.basePath).then(res => {
    console.log(1111)
    console.log(res)
    videoBlobAddress.value = URL.createObjectURL(res)
  })
}

const registerCommands = () => {
  commandsManager.register('video:local-select', videoSelectFromMenu)
}

export default registerCommands

