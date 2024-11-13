<template>

  {{this.data}}

</template>

<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';
import {Context} from "@/Context";

@Component({})
export default class HotStopView extends Vue {
  private readonly tamService = Context.provideTamService();


  private data? : string;

  private async mounted(){
      const lineId = this.$route.params.lineId as string;
      const stopId = this.$route.params.stopId as string;

      console.log(lineId, stopId);
  }

}
</script>

<style scoped>

</style>