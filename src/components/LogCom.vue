<template>
  <div class="container">
    <span>Zeitstempel: <br />{{ createDate(log.timestamp) }}</span>
    <span
      >neue max.Temperatur:<br />
      {{ log.newMaxTemperature }}°C</span
    >
    <span
      >SensorID:<br />
      {{ log.sensorId }}</span
    >
    <span
      >User:<br />
      {{ userName }}</span
    >
  </div>
</template>

<script>
import { createDate } from "../utils.js";

export default {
  name: "LogCom",
  props: {
    log: Object,
  },
  data: function data() {
    return {
      userName: "",
    };
  },
  mounted() {
    this.getUsername(this.log.userId);
  },
  methods: {
    createDate(date) {
      return createDate(date);
    },
    getUsername(userId) {
      let payload = { id: userId, endpoint: "user" };
      this.$store.dispatch("findByID", payload).then(
        (response) => {
          this.userName = response.name;
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  border: solid 1px $bordercolor;
  border-radius: 8px;
  box-shadow: 0px 7px 10px 0px darken($backgroundcolor, 5%);
  font-size: 22px;

  span {
    flex: 1 1 auto;
    padding: 10px;
  }
}
</style>
