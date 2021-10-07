<template>
  <div class="login">
    <div class="main">
      <div class="img"></div>
      <div class="func">
        <div class="register">
          <h3 @click="showLogin">登录</h3>
          <div v-show="isShowLogin" class="showLogin">
            <input type="text" v-model="login.username" placeholder="用户名">
            <input type="password" v-model="login.password" placeholder="密码">
            <p :class="{error:login.isError}">{{ login.notice }}</p>
            <button @click="onLogin">登录</button>
          </div>
        </div>
        <div class="entry">
          <h3 @click="showRegister">注册</h3>
          <div v-show="isShowRegister" class="showRegister">
            <input type="text" v-model="register.username" placeholder="用户名">
            <input type="password" v-model="register.password" placeholder="密码">
            <p :class="{error:register.isError}">{{ register.notice }}</p>
            <button @click="onRegister">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowLogin: true,
        isShowRegister: false,
        login: {
          username: '',
          password: '',
          notice: '输入用户名和密码',
          isError: false,
          mark: 'login'
        },
        register: {
          username: '',
          password: '',
          notice: '请记住用户名和密码',
          isError: false,
          mark:'register'
        }
      };
    },
    methods: {
      showLogin() {
        this.isShowLogin = true;
        this.isShowRegister = false;
      },
      showRegister() {
        this.isShowLogin = false;
        this.isShowRegister = true;
      },
      checkout(string){
        if (!/^\w{3,5}$/.test(string.username)) {
          string.notice = '用户名3~5个字符，仅限于字母数字下划线中文';
          string.isError = true;
          return;
        }
        if (!/^.{6,16}$/.test(string.password)) {
          string.notice = '密码长度为6~16个字符';
          string.isError = true;
          return;
        }
        string.notice = '';
        string.isError = false;
      },
      onLogin() {
        this.checkout(this.login);
      },
      onRegister() {
        this.checkout(this.register);
      }
    }
  };
</script>

<style lang="less" scoped>
  .login {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .main {
      width: 800px;
      height: 500px;
      display: flex;

      .img {
        width: 530px;
        height: 100%;
        background: #36bc64 url("http://cloud.hunger-valley.com/17-12-13/38476998.jpg-middle") center center no-repeat;
        background-size: contain;
      }

      .func {
        width: 270px;
        background: #ffffff;

        .showLogin, .showRegister {
          padding: 10px 20px;
          border-top: 1px solid #eeeeee;
        }

        h3 {
          padding: 10px 20px;
          font-weight: normal;
          font-size: 16px;
          border-top: 1px solid #eeeeee;
          cursor: pointer;
        }

        input {
          display: block;
          width: 100%;
          height: 35px;
          font-size: 14px;
          padding: 0 6px;
          outline: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-top: 10px;
        }

        input:focus {
          border: 3px solid #9dcaf8;
        }

        p {
          font-size: 12px;
          margin-top: 10px;
          color: #444;
        }
        .error {
          color: red;
        }
        button {
          display: block;
          height: 34px;
          font-weight: bold;
          background: #2bb964;
          border: none;
          width: 100%;
          color: #ffffff;
          font-size: 16px;
          border-radius: 4px;
          margin-top: 18px;
          cursor: pointer;
        }
      }
    }
  }

</style>
