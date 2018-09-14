<template>
  <div class="login-page">
    <!--
      rules: 表单验证规则
      auto-complete：原生属性自动补全
      label-position：表单域标签的位置
      prop: 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的
    -->
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
             label-position="left">
      <h3 class="title">vue-template</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"></svg-icon>
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on"
                  aria-placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input :type="pwdType" v-model="loginForm.password" name="password" auto-complete="on"
                  aria-placeholder="password" @keyup.enter.native="handleLogin"></el-input>
        <span class="show=pwd" @click="showPwd">
          <svg-icon icon-class="eye"/>
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {isvalidUsername} from '../../utils/validate'

  export default {
    name: 'index',
    data () {
      const validUsername = (rule, value, callback)=>{
        // if()
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: {required: true, message: '请输入用户名', trigger: 'blur'},
          password: {requi: true, message: '请输入密码', trigger: 'blur'}
        },
        pwdType: 'password'
      }
    },
    methods: {
      handleLogin () {
      },
      showPwd () {
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
