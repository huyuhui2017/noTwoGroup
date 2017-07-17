<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="news">news</router-link>
      <router-link to="package">package</router-link>
      <router-link to="article">article</router-link>
      <router-link to="comment">comment</router-link>
      <router-link to="problem">problem</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
