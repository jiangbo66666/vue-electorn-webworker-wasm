/*
 * @Author: jiangbo jiangbo1996@outlook.com
 * @Date: 2024-04-12 17:21:46
 * @LastEditors: jiangbo jiangbo1996@outlook.com
 * @LastEditTime: 2024-04-13 21:04:37
 * @FilePath: \appPla\src\router\router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createRouter, createWebHashHistory } from "vue-router";
import home from '@src/view/about.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: home },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})