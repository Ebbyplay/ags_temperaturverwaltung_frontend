<template>
  <h1>Nutzer</h1>
  <div id="user-container">
    <UserCom
      class = "user"
      v-for="(user, index) in users"
      :key="index"
      :user="user"
    />
  </div>
</template>

<script>

import UserCom from "@/components/UserCom.vue";

export default {
  name: "Nutzer",
  components: {
    UserCom
  },
  data: function data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();

    console.log(this.users);
  },
  methods: {
    getUsers() {
      this.$store.dispatch("findAll", "user").then(
        (response) => {
          for (var i = 0; i < response.length; i++) {
            var row = response[i];
            this.users[i] = {
              id: row.id,
              name: row.name,
              nickname: row.nickname,
              phonenumber: row.phonenumber,
              admin: row.admin
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
#user-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 90%;
  padding-right: 20px;
  .user {
    margin-top: 20px;
  }
}
</style>
