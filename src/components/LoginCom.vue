<template>
  <div class="card">
    <div id="heading_login">Login</div>
    <div class="input-group">
      <label for="input_username">Benutzername</label>
      <input
        type="text"
        id="input_userName"
        v-model="userName"
        @keyup.enter="login"
      />
      <span id="login_error">{{
        showError ? "Dieser Benutzer existiert nicht" : "&nbsp;"
      }}</span>
    </div>
    <div id="action">
      <button @click="login">Ok</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginCom",
  data: function data() {
    return {
      userName: "",
      showError: false,
    };
  },
  methods: {
    login: function () {
      this.$store.dispatch("findByNickname", this.userName).then(
        (response) => {
          this.$store.state.authorizedUser.name = response.name;
          this.$store.state.authorizedUser.admin = response.admin;
          this.$store.state.authorizedUser.loggedin = true;
          this.$store.state.authorizedUser.nickname = response.nickname;
          this.showError = false;
        },
        (error) => {
          this.showError = true;
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.card {
  color: $backgroundcolor;
  box-sizing: border-box;
  background-color: rgba(#fff, 0.6);
  border: 1px solid $bordercolor;
  border-radius: 20px;
  width: 50vw;
  max-width: 500px;
  height: 35vh;
  margin: 10vh auto;

  & #heading_login {
    font-size: 30px;
    padding: 5vh 0 6vh 0;
    text-align: center;
  }

  & .input-group {
    width: 50%;
    margin: 0 auto 3vh auto;

    & input {
      color: $backgroundcolor;
      background-color: rgba(#fff, 0);
      border: none;
      border-bottom: 2px solid grey;
      width: 100%;
      height: 2rem;

      &:focus-visible {
        outline: none;
        border: none;
        border-bottom: 2px solid $bordercolor;
      }
    }

    & #login_error {
      font-size: 0.8rem;
      color: darkred;
    }
  }

  & #action {
    text-align: right;
    margin-right: 8vw;

    & button {
      width: 5rem;
      height: 2rem;
      color: $bordercolor;
      background-color: $buttoncolor;
      border: none;
      transition: 0.2s;
      border-radius: 5px;

      &:hover {
        background-color: darken($buttoncolor, 10%);
      }
      &:active {
        background-color: darken($bordercolor, 20%);
      }
    }
  }
}
</style>