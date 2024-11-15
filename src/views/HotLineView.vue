
<template>
    <v-timeline side="end" dot-color="primary">
        <v-timeline-item
            v-for="item in ds"
            :key="item.stop.id"
            size="small"
        >
            <v-card width="500px">
                <v-card-title>
                    {{item.stop.name}}
                </v-card-title>
                <v-card-text>
                    <v-chip color="primary" v-for="d in item.delay">{{ d.delayCount }} sec</v-chip>
                </v-card-text>
            </v-card>
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