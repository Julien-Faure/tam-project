<template>
  <main class="d-flex justify-content-center align-items-center flex-wrap ga-10">
    <tam-line-tile v-for="line in lines" :line="line"/>
  </main>
</template>

<script lang="ts">


import {Component, Vue} from "vue-facing-decorator";
import HorlogeComponent from "@/components/HorlogeComponent.vue";
import {Context} from "@/Context";
import TamLineTile from "@/components/business/TamLineTile.vue";
import {LineModel} from "@/models/LineModel";

@Component({
  components: {TamLineTile, HorlogeComponent}
})

export default class HomeView extends Vue {
  private readonly tamService = Context.provideTamService();

  private lines: LineModel[] = [];

  private async mounted(): Promise<void> {
    const lines = (await this.tamService.getLines()).filter(value => value.type === "tramway");

    this.lines = lines;

    console.log(this.lines);
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