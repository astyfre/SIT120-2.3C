<template>
  <div id="app">
    <nav>
      <router-link to="/" class="home">Home</router-link>
      <router-link to="/form">Form</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
nav{
  padding: 10px;
  background-color: aqua;
}
.home{
  margin: 10px;
}
</style>