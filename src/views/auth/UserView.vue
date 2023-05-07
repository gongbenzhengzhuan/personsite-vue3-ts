<template>
  <h1>这里是用户页面</h1>
  <!--说明引入组件是成功的-->
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="id"
        label="主键"
        width="180">
    </el-table-column>
    <el-table-column
        prop="login"
        label="登陆人"
        width="180">
    </el-table-column>
    <el-table-column
        prop="password"
        label="密码"
        width="180">
    </el-table-column>
    <el-table-column
        prop="role"
        label="角色"
        width="180">
    </el-table-column>
  </el-table>

  <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
    <!-- 用户名 -->
    <el-form-item prop="pageIndex">
      <el-input
          v-model="loginForm.pageIndex">
      </el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item prop="pageSize">
      <el-input
          v-model="loginForm.pageSize" type="pageSize">
      </el-input>
    </el-form-item>
    <!-- 按钮区域 -->
    <el-row justify="end">
      <el-form-item class="login_btn">
        <el-button type="primary" @click="GetUserInfo">查询</el-button>
        <el-button type="primary" @click="DeleteUserInfo">删除</el-button>
      </el-form-item>
    </el-row>
  </el-form>

<!--  <el-pagination background layout="prev, pager, next" :total="1000" />-->
</template>

<script>
import axios from "axios";
import {userPageList,deleteUser} from "@/api/api"
axios.defaults.timeout = 100000
export default {
  name: 'UserView',
  methods: {
    GetUserInfo() {
      console.log("page:"+this.loginForm.pageIndex)
      userPageList(this.loginForm).then(
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
                        id: element.id,
                        login: element.login,
                        password: element.password,
                        role: element.role
                      }
                  );
                }
            );
          }
      )
    },
    DeleteUserInfo() {
      deleteUser(0).then(
          response => {
            let data = response.data;
            let code = response.code
            console.log(code)
            console.log(data)
            if (code === 204) {
              this.$router.push({path: '/'})
              return console.log('登录失败,请重新登录')
            }
          }
      )
    }
  }
  ,
  mounted() {
    this.GetUserInfo()
  }
  ,
  data() {
    return {
      tableData: [],
      loginForm: {
        pageIndex: 1,
        pageSize: 1
      }
    };
  }
}
</script>

<style>

</style>
