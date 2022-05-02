import { useIpcRendererOn } from "@vueuse/electron"
import {
  IpcRendererListener
} from "types"

export default class CommonManager {
  private commands: Map<CommandTypes, Function>;
  
  constructor() {
    this.commands = new Map<CommandTypes, IpcRendererListener>()
  }
  
  register(id: CommandTypes, fn: IpcRendererListener) {
    if (this.commands.has(id)) {
      console.log('[Player] Attempting to register an already-registered command: ' + id)
      return null
    }
    
    if (!id || !fn) {
      console.error('[Player] Attempting to register a command with a missing id, or command function.')
      return null
    }
 
    useIpcRendererOn(id, fn)
    
    this.commands.set(id, fn)
  }
}