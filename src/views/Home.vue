<template>
  <div class="home">
    <h1>Willkommen bei der BESTEN Temperaturaturverwaltung</h1>

    <div class="layout">
      <br />
      <p>
        Diese Anwendung wurde mit <strong>Vue.js 3</strong> erstellt. <br />Das
        Backend läuft mit Java als <strong>Spring-Boot</strong> Anwendung.
        <br />Zu Grunde liegt eine <strong>MariaDB</strong>.
      </p>
      <br /><br />

      <img src="../../public/thermometer_big.gif" />
    </div>
    <h2>Disclaimer</h2>
    <p>
      Wir übernehmen keinerlei Gewährleistung für entstande Verbrennungen ab dem
      2. Grad und auch nicht die ärtztlichen Kosten für Schlaganfälle beim lesen
      des SCSS Styling-Dokumentes dieser Anwendung.
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data: function data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.home {
  border: 2px solid $bordercolor;
  padding: 10px;
  border-radius: 10px;
}

.layout {
  display: flex;
}

p {
  font-size: 20px;
}

img {
  width: 200px;
  height: 200px;
}
</style>
