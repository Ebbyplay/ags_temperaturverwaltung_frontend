<template>
  <div id="navigation" class="flex">
    <button
      class="nav-item"
      v-for="(navItem, index) in navigationItems"
      :key="index"
      @click="changeNav"
    >
      <a :href="navItem.path">
        {{ navItem.name }}
      </a>
    </button>
  </div>
</template>

<script>
import { navList } from "../assets/data/navList";

export default {
  name: "Navigation",
  data: function data() {
    return {
      navigationItems: navList,
    };
  },
  methods: {
    changeNav(e) {
      this.$store.dispatch("change_nav_item", e.target.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";
$hovercolor: darken($buttoncolor, 10%);
$activecolor: darken($buttoncolor, 20%);

#navigation {
  width: inherit;
  height: inherit;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 0 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  .nav-item {
    width: 80%;
    font-size: 45px;
    border: solid $bordercolor 1px;
    cursor: pointer;
    background-color: $buttoncolor;
    transition: 0.2s;
    border-top: none;
    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-top: solid $bordercolor 1px;
    }
    &:last-child {
      border-top: none;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    &:hover {
      background-color: darken($buttoncolor, 10%);
    }
    &:active {
      background-color: darken($bordercolor, 20%);
    }
  }
}
</style>
