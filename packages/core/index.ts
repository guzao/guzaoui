import components from './components'
import { makewTthInstaller } from '@guzao-ui/utils'

// 创建插件
const installer = makewTthInstaller(components)

// 所有组件从这个文件导出
export * from '@guzao-ui/components'

//已插件的形式使用组件
export default installer