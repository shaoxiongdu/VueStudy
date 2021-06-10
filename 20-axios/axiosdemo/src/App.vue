<template>
  <div id="app">
    <img src="./assets/logo.png">

    <AxiosTest />
    <router-view/>
  </div>
</template>

<script>

import AxiosTest from "./components/AxiosTest";

export default {
  name: 'App',
  components: {
    AxiosTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
