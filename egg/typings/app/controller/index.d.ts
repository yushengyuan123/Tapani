// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportVideo from '../../../app/controller/video';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    video: ExportVideo;
  }
}
