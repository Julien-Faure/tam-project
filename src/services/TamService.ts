import {LineModel} from "@/models/LineModel";


export interface TamService {
    getLines() : Promise<LineModel[]>;
}