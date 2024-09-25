<template>

    <div class="horloge">
        <h1>{{ ui.text }}</h1>
    </div>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';
import moment from 'moment';

@Component({})
export default class HorlogeComponent extends Vue {

    private readonly ui = {
        text: ''
    }

    private intervalId?: number;

    public async mounted(): Promise<void> {
        this.intervalId = setInterval(() => {
            this.ui.text = moment().format("HH:mm:ss");
        }, 500);
    }

    public async unmounted(): Promise<void> {
        clearInterval(this.intervalId);
    }


}
</script>

<style scoped>


</style>