<template>

  <section :style="`background-color: ${ui.color}`">
    <p>{{ ui.text }}</p>
  </section>

</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-facing-decorator';
import {isNotUndefined} from "@/utils/Types";
import {linesColors} from "@/utils/TamColorMap";

@Component({})
export default class TamLineTile extends Vue {

  @Prop
  private line?: string;

  // ------------------------------------------------------------------------------------------------------------------

  private readonly ui = {
    text: '-',
    color: 'white'
  }

  // ##################################################################################################################

  private async mounted() {
    if (isNotUndefined(this.line)) {
      this.ui.text = this.line!;

      this.ui.color = linesColors.get(this.line!) ?? 'white';
    } else {
      console.error('Unable to load TAM Line component because "line" is undefined.');
    }
  }

}
</script>

<style scoped>

section {
  height: 100px;
  min-width: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>