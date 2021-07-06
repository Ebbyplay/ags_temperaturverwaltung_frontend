<template>
  <div class="table-wrapper">
    <p v-if="dataSetName">{{ dataSetName }}</p>
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in tableHeader" :key="index">
            {{ header }}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dataRow, index) in tableData" :key="index">
          <td v-for="(data, index) in dataRow" :key="index">
            {{ data }}{{ index == "value" ? "°C" : "" }}
          </td>
          <td @click="deleteTemperature(index, dataRow.id)">
            <i class="mdi mdi-delete"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableCom",
  props: {
    dataSetName: { type: String, default: "" },
    tableHeader: { type: Array },
    tableData: { type: Array },
  },
  methods: {
    deleteTemperature: function (index, temperatureId) {
      let payload = {
        endpoint: "temperature",
        id: temperatureId,
      };
      this.$store.dispatch("delete", payload);
      this.$emit("childUpdate");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.table-wrapper {
  margin: 0 10px;
  width: 100%;

  table {
    width: 99%;
    text-align: right;

    & thead {
      & th {
        position: sticky;
        top: 0px;
        padding: 10px;
        background-color: darken($backgroundcolor, 10%);
      }
    }

    & tbody {
      & td {
        padding-right: 5px;
        background-color: $buttoncolor;
      }
    }
  }
}
</style>
