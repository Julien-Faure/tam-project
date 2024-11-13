import {LineModel} from "@/models/LineModel";
import {DelayModel} from "@/models/DelayModel";
import {StopModel} from "@/models/StopModel";


export interface TamService {
    getLines() : Promise<LineModel[]>;
    getDelayByLineAndStop(lineId : string, stopId : string) : Promise<DelayModel>;
    getStop(stopId : string) : Promise<StopModel>;
}