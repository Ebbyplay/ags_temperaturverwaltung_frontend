<template>
  <h1>Logs</h1>
  <div id="logs-container">
    <LogCom class="log" v-for="(log, index) in logs" :key="index" :log="log" />
  </div>
</template>

<script>
import LogCom from "../components/LogCom.vue";

export default {
  name: "Logs",
  components: {
    LogCom,
  },
  data: function data() {
    return {
      logs: [],
    };
  },
  mounted() {
    this.getLogs();
  },
  methods: {
    getLogs() {
      this.$store.dispatch("findAll", "log").then(
        (response) => {
          response.reverse();
          for (var i = 0; i < response.length; i++) {
            var row = response[i];
            this.logs[i] = {
              newMaxTemperature: row.newMaxTemperature,
              timestamp: row.timestamp,
              userId: row.userId,
              sensorId: row.sensorId,
            };
          }
        },
        (error) => {
          console.error(error);
        }
      );
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
#logs-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 90%;
  padding-right: 20px;

  .log {
    margin-top: 20px;
  }
}
</style>
