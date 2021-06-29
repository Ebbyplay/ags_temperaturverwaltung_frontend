<template>
  <div class="home">
    <TableCom
      :dataSetName="dataSetName"
      :tableHeader="getTableHeaders"
      
    />
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
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      this.$store.dispatch("myAction").then(response => {

          console.log("Got some data, now lets show something in this component " + response[0])

        }, error =>{

           
       console.error("Got nothing from server. Prompt user to check internet connection and try again")

        })
    }
  },
  computed: {
    getData() {
      return this.$store.state.data;
    },
    getTableHeaders() {
      return this.$store.state.tableHeaders;
    },
    
  },
};
</script>
