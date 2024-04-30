/*
 * @Author: jiangbo jiangbo1996@outlook.com
 * @Date: 2024-04-12 16:46:01
 * @LastEditors: jiangbo jiangbo1996@outlook.com
 * @LastEditTime: 2024-04-14 22:41:34
 * @FilePath: \appPla\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { app, BrowserWindow } = require('electron');
const path = require('node:path');
import winConfig from './winConfig.js';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}


const createWindow = () => {
  // Create the browser window.
  // 配置windows 外层样式
  const mainWindow = new BrowserWindow({
    width: winConfig.width,
    height: winConfig.height,
    // 是否透明桌面
    transparent: true,
    titleBarStyle: 'hidden',
    // 相对于整个项目的路径？
    icon: './src/static/images/logo.png',
    // titleBarOverlay: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // let appid = app.setAppUserModelId('这个试试哈哈哈哈还是')
  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  mainWindow.setMinimumSize(winConfig.width, winConfig.height)

  // Open the DevTools. 开发调试器开关
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
