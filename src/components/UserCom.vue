<template>
    <div class="container">
        <div
        id="header"
        >
        <input
            v-model.lazy="userData.id"
            v-bind:class="[
              editing ? 'maxTempInputActive' : 'maxTempInputPassive',
            ]"
        />
        <input
            v-model.lazy="userData.name"
            v-bind:class="[
              editing ? 'maxTempInputActive' : 'maxTempInputPassive',
            ]"
        />
        <input
            v-model.lazy="userData.nickname"
            v-bind:class="[
              editing ? 'maxTempInputActive' : 'maxTempInputPassive',
            ]"
        />
        <input
            v-model.lazy="userData.phonenumber"
            v-bind:class="[
              editing ? 'maxTempInputActive' : 'maxTempInputPassive',
            ]"
        />
        <input
            v-model.lazy="userData.admin"
            v-bind:class="[
              editing ? 'maxTempInputActive' : 'maxTempInputPassive',
            ]"
        />
        
        <div id="action-bar">

        <div id="edit-div" v-if="!editing">
          <i
            class="edit mdi mdi-pencil" 
            v-on:click="editing = true"         
          />
        </div>

        <div id="edit-actions" v-if="editing">
          <i
            class="save mdi mdi-content-save"
            v-on:click="onSave"
          />
          <i
            class="cancel mdi mdi-close-thick"
            v-on:click="editing = false"
          />
        </div>
      </div>


        </div>
    </div>
</template>

<script>

export default {
  name: "UserCom",
  components: {
  },
  props: {
      user: Object,
  },
  data: function data() {
    return {
      editing: false,
      userData: {
        id: this.user.id,
        name: this.user.name,
        nickname: this.user.nickname,
        phonenumber: this.user.phonenumber,
        admin: this.user.admin
      }
    };
  },
  mounted() {
  },
  methods: {
    onSave(){
      this.editing = false;
      this.updateUser(this.userData);
    },

    updateUser(userData){
      let payload = {
        endpoint: "user",
        updateEntity: userData,
      };
      this.$store.dispatch("update", payload);
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

  #action-bar {
    display: flex;
    height: 100%;
    flex: 1 1 6%;
    flex-direction: column;
    text-align: right;

    #edit-div {
        padding: 10px 5px 10px 5px;
        min-width: 64px;
    }

    #edit-actions {
        padding: 10px 5px 10px 5px;
        min-width: 64px;
    }

    .edit,
    .save,
    .cancel {
      cursor: pointer;
      padding: 10px 5px 10px 5px;
      &:hover {
        color: $bordercolor;
      }
      &:active {
        color: darken($bordercolor, 10%);
      }
    }
  }

    .maxTempInputActive {
        display: inline;
        font-size: inherit;
        border: 1px solid $bordercolor;
        padding: none;
        background-color: inherit;
        color: inherit;
        width: 100%;
    }

    .maxTempInputPassive {
        border: none;
        display: inline;
        font-size: inherit;
        padding: none;
        background-color: inherit;
        color: inherit;
        pointer-events: none;
        width: 100%;

        &:focus {
            outline: none;
        }
    }
  
}


</style>