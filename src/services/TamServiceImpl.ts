import {TamService} from "@/services/TamService";
import {LineInfosDto} from "@/services/dto/LineInfosDto";
import {LineModelUnit} from "@/models/LineModelUnit";
import {DelayModelUnit} from "@/models/DelayModelUnit";
import {StopModelUnit} from "@/models/StopModelUnit";
import {StopDelayDto} from "@/services/dto/StopDelayDto";
import {isUndefined} from "@/utils/Types";
import {TestDto} from "@/services/dto/TestDto";
import {DelayStopModel} from "@/models/DelayStopModel";


export class TamServiceImpl implements TamService {

    private readonly apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getLines(): Promise<LineModelUnit[]> {

        const response = await fetch(`${this.apiUrl}/gtfs/lignes`);

        if (!response.ok) throw new Error("Unable to fetch lines from API.");


        let data = await response.json() as LineInfosDto[];
        data = data.filter(line => line.type === "tramway");

        const models: LineModelUnit[] = data.map(this.mapToLineModel);

        return models;
    }

    private mapToLineModel(line: LineInfosDto): LineModelUnit {
        return {
            type: line.type,
            name: line.nom,
            number: line.numero
        }
    }

    getStop(stopId: string): Promise<StopModelUnit> {
        return Promise.resolve({id: stopId, name: "Stop"} as StopModelUnit);
    }

    async getDelayByLineAndStop(lineId: string, stopId: string): Promise<DelayModelUnit[]> {
        const delayResponse = await fetch(`${this.apiUrl}/gtfs/stop/rt/${stopId}`);

        if (!delayResponse.ok) throw new Error("Unable to fetch lines from API.");

        const lineStops = await delayResponse.json() as { [key: string]: any };
        const res = [] as DelayModelUnit[];
        if(lineStops.hasOwnProperty(lineId)){
            const lineStop = lineStops[lineId] as {"0" : {[key:string] : {time : string}[]}};
            for (let key in lineStop["0"]) {
                res.push({
                    direction : 0,
                    delayCount : Number.parseInt(lineStop["0"][key][0].time)
                });
            }
            return res;
        }else throw new Error(`Line not found for stop ${stopId}.`);
    }

    async getAllDSByLine(lineId: string): Promise<DelayStopModel[]> {
        const delayResponse = await fetch(`${this.apiUrl}/gtfs/ligne/${lineId}/ordered-arrets`);

        if (!delayResponse.ok) throw new Error("Unable to fetch lines from API.");

        const lineStops = await delayResponse.json() as TestDto;

        const stopDelayArray: StopDelayDto[] = []

        for (const key in lineStops.stops) {
            if (lineStops.stops.hasOwnProperty(key)) {
                stopDelayArray.push(lineStops.stops[key]);
            }
        }

        const stops: DelayStopModel[] = await Promise.all(stopDelayArray.map(async value => {
            let delayCount: string;
            if(value.next_pass !== null) {
                delayCount = value.next_pass.time;
                if (isUndefined(delayCount)) delayCount = "-1";
            }else {
                delayCount = "-2"
            }

            return {
                stop : {
                    id: value.id,
                    name: value.nom
                },
                delay : await this.getDelayByLineAndStop(lineId, value.logical_stop)
            }
        }));

        return stops;
    }


}