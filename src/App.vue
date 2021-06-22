<template>
  <div id="header" class="flex">
    <!--TODO: Header View-->
  </div>
  <div id="main" class="flex">
    <div id="nav">
      <NavigationCom />
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
  <div id="footer">
    <!--TODO: Footer View-->
  </div>
</template>

<script>
import NavigationCom from "@/components/NavigationCom.vue";

export default {
  name: "Home",
  components: { NavigationCom },
};
</script>

<style lang="scss">
@import "assets/css/theme.scss";

body {
  margin: 0;
  padding: 0;
  background-color: $backgroundcolor;
  color: $textcolor;
}

button {
  color: $textcolor;
}

.flex {
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
}

#header {
  height: 10vh;
  background-color: darken($backgroundcolor, 10%);
  box-shadow: 0px 7px 10px 5px darken($backgroundcolor, 5%);
}

#main {
  height: 80vh;
}

#nav {
  width: 20vw;
  padding: 5vh 0vw;
}

#content {
  width: 80vw;
  padding: 5vh 5vw;
}

#footer {
  height: 10vh;
  background-color: darken($backgroundcolor, 10%);
}
</style>
