/*
 * @Author: jiangbo jiangbo1996@outlook.com
 * @Date: 2024-04-12 16:46:01
 * @LastEditors: jiangbo jiangbo1996@outlook.com
 * @LastEditTime: 2024-04-12 17:16:51
 * @FilePath: \appPla\src\renderer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */


import './index.css';

import { createApp } from 'vue'
import router from "./router/router"


import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')

console.log('👋 This message is being logged by "renderer.js", included via Vite');
