import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'
//

import { vMaska } from "maska"
import { createPinia } from 'pinia'

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents,
    },
    directives
});

const pinia = createPinia();

createApp(App).use(pinia).directive("maska",vMaska).use(router).use(vuetify).mount('#app')
