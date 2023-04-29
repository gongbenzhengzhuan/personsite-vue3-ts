<template>
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/tablePost">TablePost</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/sentinel">OtherViews</router-link> |
    <router-link to="/template">Template</router-link>
  </nav>
  <router-view/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
