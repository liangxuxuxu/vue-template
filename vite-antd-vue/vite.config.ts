import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
import ViteComponents, {
  AntDesignVueResolver,
} from 'unplugin-vue-components/dist/resolvers'
import Components from 'unplugin-vue-components/dist/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteCompression(),
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    })
  ]
})
