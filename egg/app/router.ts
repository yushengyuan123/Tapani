import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  
  console.log(controller)

  router.get('/', controller.home.index)
  router.post('/video', controller.video.index)
}
