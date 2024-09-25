<template>
    <main>
        <horloge-component class="horloge"/>
    </main>
</template>

<script lang="ts">


import {Component, Vue} from "vue-facing-decorator";
import HorlogeComponent from "@/components/HorlogeComponent.vue";

@Component({
    components: {HorlogeComponent}
})

export default class HomeView extends Vue {



    async mounted(): Promise<void> {

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

    background-color: #00b80b;
}

.horloge {
    font-size: 10vw;
    font-weight: normal;

    color: white;
}

</style>