<template>
  <div id="header" class="flex">
    <HeaderCom></HeaderCom>
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
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import HeaderCom from "@/components/HeaderCom.vue";
import NavigationCom from "@/components/NavigationCom.vue";
import FooterCom from "@/components/FooterCom.vue";

export default {
  name: "Home",
  components: { NavigationCom, HeaderCom, FooterCom },
};
</script>

<style lang="scss">
@import "assets/css/theme.scss";
@import "../node_modules/@mdi\\font/css/materialdesignicons.min.css";

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
}

#header {
  height: 10vh;
}

#main {
  height: 80vh;
}

#footer {
  height: 10vh;
  background-color: darken($backgroundcolor, 10%);
}

#nav {
  width: 30vw;
  padding: 5vh 0vw;
}

#content {
  width: 70vw;
  padding: 5vh 5vw;
}
</style>
