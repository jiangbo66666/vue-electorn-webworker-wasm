/*
 * @Author: jiangbo jiangbo1996@outlook.com
 * @Date: 2024-04-12 16:46:01
 * @LastEditors: jiangbo jiangbo1996@outlook.com
 * @LastEditTime: 2024-04-14 21:46:46
 * @FilePath: \appPla\vite.renderer.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { pluginExposeRenderer } from './vite.base.config.mjs';

import path from "path"
function resolve(dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config
export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'renderer'>} */
  const forgeEnv = env;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  /** @type {import('vite').UserConfig} */
  return {
    root,
    mode,
    base: './',
    build: {
      outDir: `.vite/renderer/${name}`,
      target: 'es2020'
    },
    optimizedeps: {
      esbuildoptions: {
        target: 'es2020'
      }
    },
    plugins: [pluginExposeRenderer(name), vue()],
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@src': resolve('src')
      }
    },
    clearScreen: false,
  };
});
