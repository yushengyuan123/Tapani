import { commandsManager } from "./components/CommonManager/instance"
import { useVideoInfo } from "./store/videoInfo";
import { storeToRefs } from 'pinia'
import { 
  Command,
  videoSelectArgs
} from "../../share"
import {
  IpcRendererListener
} from "types"

const videoSelectFromMenu: IpcRendererListener<videoSelectArgs>
  = (event, args) => {
    console.log('注册文件选择回调', args)
    const blob = new Blob([args.buffer])
    const { videoBlobAddress } = storeToRefs(useVideoInfo())
    videoBlobAddress.value = URL.createObjectURL(blob)
  }

const registerCommands = () => {
  commandsManager.register(Command.VIDEO_LOCAL_SELECT, videoSelectFromMenu)
}

export default registerCommands

