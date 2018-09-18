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
          <svg-icon icon-class="user" />
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
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye"/>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%">登录</el-button>
        <span class="svg-container"><svg-icon icon-class="user"/> </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {isvalidUsername} from '../../utils/validate'

  export default {
    name: 'index',
    data () {
      //判断用户名是否可用
      const validUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      //判断输入密码是否可用
      const validatePass = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('密码不能小于5位'))
        } else {
          callback()
        }
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
        pwdType: 'password',
        loading: false
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        }
      }
    },
    methods: {
      handleLogin () {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false
              this.$router.push({path: this.redirect || '/'})
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      showPwd () {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      }
    }
  }
</script>

<style ref="stylesheet/css" lang="scss">
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  .login-page {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login-form {
      width: 400px;
      margin: 120px auto;
      padding: 35px 35px 15px;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.1);
      color: #454545;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: none;
        outline: none;
        -webkit-appearance: none;
        border-radius: 0px;
        height: 47px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .svg-container {
      display: inline-block;
      width: 30px;
      height: 30px;
      color: $dark_gray;
      vertical-align: middle;
      border: 1px solid red;
      &_login {
        font-size: 20px;
      }
    }
    .title{
      margin: 0 auto 40px;
      font-size: 26px;
      color: $light_gray;
      font-weight: bold;
      text-align: center;
    }
    .show-pwd{
      display: inline-block;
      position: absolute;
      right: 10px;
      top: 7px;
      width: 16px;
      height: 16px;
      font-size: 16px;
      color: $light_gray;
      cursor: pointer;
      user-select: none;
      border: 1px solid red;
    }
  }
</style>
