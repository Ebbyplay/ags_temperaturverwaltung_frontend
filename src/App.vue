<template>
  <div id="header">
    <!--TODO: Header View-->
  </div>
  <div id="main">
    <div id="nav"></div>
    <NavigationCom />
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
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}

#header {
  height: 10vh;
  background-color: green;
}

#main {
  height: 80vh;
  display: flex;
  background-color: blue;
}

#nav {
  width: 20vw;
}

#content {
  width: 80vw;
  background-color: cyan;
  padding: 5vh 5vw;
}

#footer {
  height: 10vh;
  background-color: red;
}
</style>
