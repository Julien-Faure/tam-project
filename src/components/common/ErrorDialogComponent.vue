<template>
    <v-dialog
        v-model="this.showing"
        persistent
        width="460px"
    >
        <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>{{ message }}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="deep-orange-darken-4" @click="()=>this.$emit('onClose')">Ok</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script lang="ts">

import {Component, Emit, Prop, Vue} from "vue-facing-decorator";


@Component
export default class WarningDialogComponent extends Vue {

    @Prop
    showing?: boolean;
    @Prop
    title?: string;
    @Prop
    message?: string;

    @Emit
    onClose(){
        return
    }

}
</script>

<style scoped>

</style>