<template>
  <h1>这里是搜索日志页面</h1>
  <!--说明引入组件是成功的-->
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="userName"
        label="用户名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="roleName"
        label="角色名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="subsystem"
        label="系统名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="operationType"
        label="操作类型"
        width="180">
    </el-table-column>
    <el-table-column
        prop="createTime"
        label="创建时间"
        width="180">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import {getLabel} from "@/api/api"
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000
export default {
  name: 'SearchLogView',
  methods: {
    GetUserInfo() {
      getLabel().then(
          response => {
            let data = response.data;
            let code = response.code
            console.log(code)
            if (code === 204) {
              this.$router.push({path: '/'})
              return console.log('登录失败,请重新登录')
            }
            if (null === data) return console.log('内容为空')
            console.log(data)
            data.forEach(
                element => {
                  this.tableData.push(
                      {
                        userName: element.userName,
                        roleName: element.roleName,
                        subsystem: element.subsystem,
                        operationType: element.operationType,
                        createTime: element.createTime
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
  mounted() {
    this.GetUserInfo()
  }
  ,
  data() {
    return {
      tableData: [],
    };
  }
}
</script>

<style>
</style>
