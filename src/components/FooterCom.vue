<template>
  <div class="container">
    <div id="github">
      <div id="github-front">
        <a href="https://github.com/Ebbyplay/ags_temperaturverwaltung_backend"
          ><i class="mdi mdi-github"></i>
          Github backend
        </a>
      </div>
      <div id="github-backend">
        <a href="https://github.com/Ebbyplay/ags_temperaturverwaltung_frontend/"
          ><i class="mdi mdi-github"></i>
          Github Frontend
        </a>
      </div>
    </div>
    <div id="names">
      Lorenz Amme, Tim Eberhardt, Nick Heißner, Samuel Walter
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.container {
  display: flex;
  flex-direction: row;
  background-color: darken($backgroundcolor, 10%);
  padding-top: 2vh;

  & > #github {
    min-width: 20vw;
    & a {
      text-decoration: none;

      &:visited {
        text-decoration: none;
      }
    }
  }

  & > #names {
    padding-left: 5vw;
    color: darken($textcolor, 10%);
    min-height: 10vh;
    width: 80vw;
  }
}
</style>