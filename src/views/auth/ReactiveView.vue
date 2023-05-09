<template>
  <div>
    <p>{{msg.date}}</p>
    <button @click="c">button</button>
  </div>

</template>
<!--https://blog.csdn.net/weixin_44283432/article/details/111190176-->
<script>
import { reactive } from 'vue'
export default {
  name: "ReactiveView",
  setup() {
    let msg = reactive({date:new Date()})
    function c() {
      console.log(msg);
      msg.date.setDate(msg.date.getDate()+1);
      msg.date=new Date(msg.date);
      console.log(msg);
    }
    return {
      msg,
      c
    };
  }
}

</script>

<style scoped>

</style>