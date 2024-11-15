import {defineStore} from "pinia";
import {LineModelUnit} from "@/models/LineModelUnit";
import {Context} from "@/Context";
import {StopModelUnit} from "@/models/StopModelUnit";
import {DelayStopModel} from "@/models/DelayStopModel";


interface TamStoreEnvironment {
    lines : LineModelUnit[]
    ds : Map<string, DelayStopModel[]>
}
const tamService = Context.provideTamService();
export const useTamStore = defineStore('tam', {
    state: () : TamStoreEnvironment => ({
        lines : [],
        ds : new Map<string, DelayStopModel[]>()
    }),
    getters: {

    },
    actions : {
        async refresh(){
            await this.refreshLines();
            this.ds.clear();
            for (let line of this.lines) {
                await this.refreshAllDSByLine(line.number);
            }
        },
        async refreshLines(){
            this.lines = await tamService.getLines();
        },
        async refreshAllDSByLine(lineId : string){
            this.ds.set(lineId, await tamService.getAllDSByLine(lineId));
        },
        getAllDSByLine(lineId : string) : DelayStopModel[] {
            if (this.ds.has(lineId))
                return this.ds.get(lineId)!
            else
                throw new Error(`Line ${lineId} not found.`)
        }
    }
})