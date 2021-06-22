<template>
  <div class="home">
    <TableCom
      :dataSetName="dataSetName"
      :tableHeader="tableHeader"
      :tableData="tableData"
    />
    {{ info }}
  </div>
</template>

<script>
import TableCom from "@/components/TableCom.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    TableCom,
  },
  data: function data() {
    return {
      dataSetName: "TestTabelle",
      tableHeader: ["Header1", "Header2", "Header3"],
      tableData: [
        ["11", "12", "13"],
        ["21", "22", "23"],
        ["31", "32", "33"],
      ],
      info: "",
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
};
</script>
