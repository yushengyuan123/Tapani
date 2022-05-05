import { commandsManager } from "./components/CommonManager/instance"
import { useVideoInfo } from "./store/videoInfo"
import {
  Command,
  VideoSelectArgs,
} from "../../share/index.ts"
import {
  IpcRendererListener
} from "types"
import {
  localFileApi
} from "./api/localFile"

const videoSelectFromMenu: IpcRendererListener<VideoSelectArgs> = (event, args) => {
  const {
    updateVideoAddress
  } = useVideoInfo()
  
  localFileApi.getLocalFile(args.basePath).then(blob => {
    updateVideoAddress(URL.createObjectURL(blob))
  })
}

const registerCommands = () => {
  commandsManager.register(Command.VIDEO_LOCAL_SELECT, videoSelectFromMenu)
}

export default registerCommands

