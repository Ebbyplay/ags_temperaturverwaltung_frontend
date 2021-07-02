<template>
  <div class="container">
    <div id="logo"></div>
    <h1>AGS-Temperaturverwaltung</h1>
    <span id="nickname">{{ $store.state.authorizedUser.nickname }}</span>
    <span @click="logout" id="logout"> <i class="mdi mdi-logout"></i></span>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  methods: {
    logout: function() {
      this.$store.state.authorizedUser = {
        id: null,
        name: null,
        admin: false,
        loggedin: false,
        nickname: null,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.container {
  display: flex;
  flex-direction: row;
  background-color: darken($backgroundcolor, 10%);
  box-shadow: 0px 7px 10px 5px darken($backgroundcolor, 5%);
  max-width: 100vw;

  #logo {
    min-width: 30vw;
  }

  h1 {
    padding: 0 5vw;
    width: 70vw;
  }

  #logout {
    cursor: pointer;
    color: darken($textcolor, 10%);
    font-size: 32px;
    padding: 21px 2rem 0 0;
  }

  & #nickname {
    color: darken($textcolor, 10%);
    padding: 30px 0.3rem 0 2rem;
    font-size: 1rem;
  }
}
</style>
