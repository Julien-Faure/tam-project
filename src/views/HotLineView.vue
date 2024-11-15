<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';
import {Context} from "@/Context";

@Component({})
export default class HotLineView extends Vue {
    private readonly tamService = Context.provideTamService();


    private data? : string;

    private async mounted() {
        const lineId = this.$route.params.lineId as string;

    }
}
</script>

<template>

</template>

<style scoped>

</style>