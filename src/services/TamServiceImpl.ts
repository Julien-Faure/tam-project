import {TamService} from "@/services/TamService";
import {LineInfosDto} from "@/services/dto/LineInfosDto";
import {LineModel} from "@/models/LineModel";
import {types} from "sass";
import Error = types.Error;
import {DelayModel} from "@/models/DelayModel";
import {StopModel} from "@/models/StopModel";


export class TamServiceImpl implements TamService {

    private readonly apiUrl : string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getLines(): Promise<LineModel[]> {

        const response = await fetch(`${this.apiUrl}/gtfs/lignes`);

        if (!response.ok) throw new Error("Unable to fetch lines from API.");


        const data = await response.json() as LineInfosDto[];

        const models : LineModel[] = data.map(this.mapToLineModel);

        return models;
    }

    private mapToLineModel(line : LineInfosDto ) : LineModel {
            return {
                type: line.type,
                name: line.nom,
                number: line.numero
            }
    }

    async getDelayByLineAndStop(lineId: string, stopId: string): Promise<DelayModel> {
        const delayResponse = await fetch(`${this.apiUrl}/gtfs/ligne/${lineId}/ordered-arrets`);
        const stopResponse = await fetch(`${this.apiUrl}/gtfs/ligne/${lineId}/physicalstops`);


        //TODO : Do magic tricks to get delay by line and stop

        if (!delayResponse.ok) throw new Error("Unable to fetch lines from API.");

        const lineStops = await delayResponse.json() as any;


        return Promise.resolve(undefined);
    }

    getStop(stopId: string): Promise<StopModel> {
        return Promise.resolve(undefined);
    }


}