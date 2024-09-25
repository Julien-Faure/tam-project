import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'
import { vMaska } from "maska"

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents,
    },
    directives
})

createApp(App).directive("maska",vMaska).use(router).use(vuetify).mount('#app')
