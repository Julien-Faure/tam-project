import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import HotStopView from "@/views/HotStopView.vue";
import HotLineView from "@/views/HotLineView.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            security: false
        }
    },
    {
        path: "/hot/lines/:lineId",
        name: "hot-line",
        component: HotLineView,
        meta: {
            security: false
        }
    },
    {
        path: "/hot/lines/:lineId/:stopId",
        name: "hot-stop",
        component: HotStopView,
        meta: {
            security: false
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
