<template>
  <div class="table-wrapper">
    <h1 v-if="dataSetName">{{ dataSetName }}</h1>
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in tableHeader" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dataRow, index) in tableData" :key="index">
          <td v-for="(data, index) in dataRow" :key="index">
            {{ data }}{{ index == "value" ? "°C" : "" }}
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

        &:first-of-type {
          border-top-left-radius: 10px;
        }

        &:last-of-type {
          border-top-right-radius: 10px;
        }
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
