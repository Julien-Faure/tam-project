import {LineModelUnit} from "@/models/LineModelUnit";
import {DelayModelUnit} from "@/models/DelayModelUnit";
import {StopModelUnit} from "@/models/StopModelUnit";
import {DelayStopModel} from "@/models/DelayStopModel";


export interface TamService {
    getLines() : Promise<LineModelUnit[]>;
    getStop(stopId : string) : Promise<StopModelUnit>;
    getAllDSByLine(lineId : string) : Promise<DelayStopModel[]>;
}