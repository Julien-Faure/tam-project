<template>
  <main class="d-flex justify-content-center align-items-center flex-wrap ga-10">
    <tam-line-tile v-for="line in lines" :line="line"/>
  </main>
</template>

<script lang="ts">


import {Component, Vue} from "vue-facing-decorator";
import HorlogeComponent from "@/components/HorlogeComponent.vue";
import {TamServiceImpl} from "@/services/TamServiceImpl";
import {Context} from "@/Context";
import TamLineTile from "@/components/business/TamLineTile.vue";

@Component({
  components: {TamLineTile, HorlogeComponent}
})

export default class HomeView extends Vue {
  private readonly tamService = Context.provideTamService();

  private lines: string[] = [];

  private async mounted(): Promise<void> {
    const lines = await this.tamService.getLines();

    this.lines = lines;
  }
}
</script>

<style scoped>

main {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  background-color: #ececec;
}


</style>