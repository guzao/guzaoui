import { each } from 'lodash-es'
import type { App, Plugin } from 'vue'

type SFCWithInsatll<T> = T & Plugin


/**
 * 全量组件注册
*/
export function makewTthInstaller(components: Plugin []) {
  const installer = (app: App) => each(components, c => app.use(c))

  return installer as Plugin
}



/**
 * 单个组件注册
*/
export const witheInstall = <T> (component: T) => {

  (component as SFCWithInsatll<T>).install = (app: App) => {
    const name = (component as any).name
    app.component(name, component as Plugin)
  }  

  return component as SFCWithInsatll<T>

}