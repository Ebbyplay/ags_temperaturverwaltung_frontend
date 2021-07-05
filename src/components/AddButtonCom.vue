<template>
    <div class="container">
        <div 
         id="header"
         v-on:click="createUser"
        >
          <span> Hinzufügen </span>
        </div>
    </div>
</template>

<script>

export default {
  name: "UserCom",
  components: {
  },
  props: {
  },
  data: function data() {
    return {
      userData: {
        name: "",
        nickname: "",
        phonenumber: 0,
        admin: false
      }
    };
  },
  mounted() {
  },
  methods: {
    createUser(){
      let payload = {
        endpoint: "user",
        newEntity: this.userData,
      };
      this.$store.dispatch("create", payload);
      location.reload();
    }
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: solid 1px $bordercolor;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 7px 10px 0px darken($backgroundcolor, 5%);
  font-size: 22px;

  #header {
    display: flex;
    width: 100%;
    height: 50px;

    span {
      padding: 10px 10px 10px 10px;
    }
  }
  
}


</style>