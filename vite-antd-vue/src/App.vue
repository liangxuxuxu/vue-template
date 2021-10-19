

<template>
  <div class="app">
    <span>
      a
      <a-button type="dashed">Primary Button</a-button>
    </span>
    <router-view></router-view>
  </div>
</template>
<script  lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { Button } from 'ant-design-vue';
import { useStore } from 'vuex'
import { key } from './store'
export default {
  components: {Button},
  setup () {
    const store = useStore(key)

     console.log( store.state.count)
  }
}
</script>
<style lang="less">
.app{
  color: red;
  text-align: center;
}
</style>
