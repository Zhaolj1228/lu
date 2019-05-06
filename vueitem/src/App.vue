<template>
  <div id="app">
    <div>
      <Header></Header>
      <router-link :to="{path:'/child1'}">点我</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>

</style>
