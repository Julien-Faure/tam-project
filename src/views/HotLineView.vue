<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';
import {Context} from "@/Context";
import {useTamStore} from "@/stores";

@Component({})
export default class HotLineView extends Vue {
    private readonly tamService = Context.provideTamService();


    private data? : string;

    private async mounted() {
        const lineId = this.$route.params.lineId as string;

        const tamStore = useTamStore();
        await tamStore.refreshAllDSByLine(lineId);

        this.data = JSON.stringify(tamStore.getAllDSByLine(lineId));
    }
}
</script>

<template>
    {{this.data}}
</template>

<style scoped>

</style>