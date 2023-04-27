<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <a href="http://101.37.117.226:8111/#/login" target="_blank" rel="noopener">点击进入sentinel的登录页</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SentinelView',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
