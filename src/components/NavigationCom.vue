<template>
    <button v-for="(navItem, index) in navigationItems" :key="index">{{ navItem }}</button>
</template>

<script>
export default {
    name: "Navigation",
    props: {
        navigationItems: {String, default: ["Home","Test1"]},
    }
}
</script>

<style lang="scss">
    
</style>