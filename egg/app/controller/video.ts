import {Controller} from 'egg';
import * as fs from "fs";

export default class VideoController extends Controller {
  public async index() {
    const { ctx } = this;
    const filePath = ctx.request.body.filePath
    const { size } = fs.statSync(filePath)
    
    ctx.set('Content-Length', size.toString());
    ctx.set('Content-Type','application/octet-stream');
    
    ctx.body = fs.createReadStream(filePath)
  }
}
