<template>
  <div class="container-box" v-loading="loading">
    <i class="iconfont iconweixiu"></i>
    <mu-text-field v-model="loginForm.email" placeholder="email"></mu-text-field>
    <br />

    <i class="iconfont icondengji1"></i>
    <mu-text-field v-model="loginForm.password" placeholder="password"></mu-text-field>
    <br />

    <i class="iconfont icontouxiang1"></i>

    <mu-button color="primary" @click="login">login in</mu-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      loginForm: {
        email: "",
        password: ""
      },
      loading:false
    };
  },
  mounted() {
    // this.getList();
  },
  methods: {
    login() {
      this.loading = true
      BIObj.request("post", BIObj.URL.login, this.loginForm)
        .then(res => {
          this.loading = false
          console.log(res);
        })
        .catch(error => {
          console.log(error);
          
          this.loading = false
        });
    },
    getList() {
      this.loading = true
      let params = {
        pageNum: 1,
        pageSize: 10,
        searchStr: ""
      };
      BIObj.request("get", BIObj.URL.merchantType.list, params)
        .then(response => {
          this.loading = false
          console.log(response);
        })
        .catch(error => {
          this.loading = false
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
