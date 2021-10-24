<template>
  <div id="app">
    <appHeader/>
    <router-view/>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'

export default {
  components: {
    appHeader,
  },
}
</script>

