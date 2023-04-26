<template>
  <h1>这里是table页面</h1>
  <!--说明引入组件是成功的-->
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="date"
        label="日期"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import {getAllData} from "@/api/api"
import {getArticleList} from "@/api/api"
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000
export default {
  name: 'TableView',
  methods: {
    GetUserInfo() {
      //方案一
      //axios.get('http://123.60.190.167:8088//datasystem-client/labelManage/getLabelFeature?id=10991').then(

      //方案二
      // const getNewList = () => {
      //   const params = {
      //     id: 10991
      //   }
      //   getArticleList(params).then(
      //方案三
      getAllData().then(
          response => {
            let data = response.data;
            let result = data.data;
            console.log(result)
            result.forEach(
                element => {
                  this.tableData.push(
                      {
                        name: element.userName,
                        date: element.createTime,
                        address: element.operationType
                      }
                  );
                }
            );
          }
      )
    }
  }
//}
,
mounted()
{
  this.GetUserInfo()
}
,
data()
{
  return {
    tableData: [],
  };
}
}
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
