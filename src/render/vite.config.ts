const vue = require('@vitejs/plugin-vue')
const VueJsx = require('@vitejs/plugin-vue-jsx')
const { defineConfig } = require('vite')
const path = require('path')
import Icons from 'unplugin-icons/vite'

const viteConfig = defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        dir: path.join(__dirname, 'lib/main/dist')
      }
    }
  },
  plugins: [
    vue(),
    VueJsx(),
    Icons({
      compiler: 'vue3'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src") //把src改为@
    }
  }
})

module.exports = viteConfig