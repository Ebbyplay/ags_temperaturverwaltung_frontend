<template>
  <h1>Logs</h1>
  <div id="logs-container"></div>
</template>

<script>
import axios from "axios";

export default {
  name: "Logs",
  components: {},
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
  .sensor {
    margin-top: 20px;
  }
}
</style>
