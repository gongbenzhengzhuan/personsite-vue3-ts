<template>
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/tablePost">TablePost</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/sentinel">OtherViews</router-link> |
    <router-link to="/loginPost">loginPost</router-link> |
    <router-link to="/loginPostReal">loginPostReal</router-link> |
    <router-link to="/searchLogView">searchLogView</router-link> |
    <router-link to="/userView">userView</router-link> |
    <router-link to="/roleView">roleView</router-link> |
    <router-link to="/crudDemoView">crudDemoView</router-link> |
    <router-link to="/template">Template</router-link>
  </nav>
  <router-view/>
</template>
<script lang="ts" setup>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
