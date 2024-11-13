import {TamService} from "@/services/TamService";
import {LineInfosDto} from "@/services/dto/LineInfosDto";
import {LineModel} from "@/models/LineModel";


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
}