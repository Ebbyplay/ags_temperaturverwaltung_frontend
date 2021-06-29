<template>
  <div id="login">
    <div>Login</div>
    <input type="text" v-model="userName" />
    <button @click="login">Ok</button>
  </div>
</template>

<script>
export default {
  name: "LoginCom",
  data: function data() {
    return { userName: "" };
  },
  methods: {
    login: function () {
      this.$store.dispatch("actionLogin", this.userName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

#login {
}
</style>