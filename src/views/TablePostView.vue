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

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<!--<script>
import axios from "axios";
import {alldata} from "@/api/api"
import {onMounted, reactive} from "vue";
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000

const tableData=[];
export default {
  name: "TablePostView",
  setup() {
    // const datas = reactive({
    //   tableData: [],
    // })

    const methods = {
      requestall() {
        const data = {
          "pageIndex": 0,
          "pageSize": 10
        }
        alldata(data).then(res => {
          let result = res.data
          console.log(res);
          console.log(result)
          result.forEach(
              element => {
                console.log(element)
                tableData.push(
                    {
                      name: element.userName,
                      date: element.createTime,
                      address: element.searchKeywords
                    }
                );
              }
          );
          console.log("tableData:"+tableData)
          // console.log(tableData.pop())
          // this.tableData = datas.tableData
          // console.log("thistable:"+this.tableData)
        }).catch(err => {
          console.log(err)
        })
      }
    }
    onMounted(() => {
      methods.requestall()
    })

    // return {
    //   ...methods
    // }
  },
  data()
  {
    return {
      tableData,
    };
  }
}

</script>-->

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
