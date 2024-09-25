<template>
    <router-view/>
</template>

<script lang="ts">


import {Component, Vue} from "vue-facing-decorator";

@Component
export default class App extends Vue {
}
</script>

<style>

@font-face {
    font-family: TTInterfaces;
    src: url("assets/fonts/TTInterfaces-Medium.ttf");
}

* {
    font-family: TTInterfaces, serif;
}

</style>