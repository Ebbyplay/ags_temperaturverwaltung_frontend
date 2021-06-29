<template>
  <div class="container">
    <div id="github">
      <div id="github-front">
        <a href="https://github.com/Ebbyplay/ags_temperaturverwaltung_backend"
          ><i class="mdi mdi-github"></i>
          Backend
        </a>
      </div>
      <div id="github-backend">
        <a href="https://github.com/Ebbyplay/ags_temperaturverwaltung_frontend/"
          ><i class="mdi mdi-github"></i>
          Frontend
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
  max-width: 100vw;

  & > #github {
    width: 20vw;
    padding-top: 1vh;
    padding-left: 1.5vw;
    & a {
      text-decoration: none;

      &:visited {
        text-decoration: none;
      }
    }
  }

  & > #names {
    padding-left: 5vw;
    padding-top: 1vh;
    color: darken($textcolor, 10%);
    width: 80vw;
  }
}
</style>