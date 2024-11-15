
<template>
    <v-timeline side="end">
        <v-timeline-item
            v-for="item in ds"
            :key="item.stop.id"
            size="small"
        >
            {{item.stop.name}}
        </v-timeline-item>
    </v-timeline>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';
import {Context} from "@/Context";
import {useTamStore} from "@/stores";
import {DelayStopModel} from "@/models/DelayStopModel";

@Component({})
export default class HotLineView extends Vue {
    private readonly tamService = Context.provideTamService();


    private ds : DelayStopModel[] = [];

    private async mounted() {
        const lineId = this.$route.params.lineId as string;

        const tamStore = useTamStore();
        await tamStore.refreshAllDSByLine(lineId);

        this.ds = tamStore.getAllDSByLine(lineId);
    }
}
</script>


<style scoped>

</style>