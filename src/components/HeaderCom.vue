<template>
  <div class="container">
    <div id="logo"></div>
    <h1>AGS-Temperaturverwaltung</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.container {
  display: flex;
  flex-direction: row;
  padding: 2vh 0;
  background-color: darken($backgroundcolor, 10%);
  box-shadow: 0px 7px 10px 5px darken($backgroundcolor, 5%);

  #logo {
    min-width: 20vw;
  }

  h1 {
    padding: 0 5vw;
    width: 80vw;
  }
}
</style>
