import {StopModelUnit} from "@/models/StopModelUnit";
import {DelayModelUnit} from "@/models/DelayModelUnit";

export interface DelayStopModel {
    stop : StopModelUnit,
    delay : DelayModelUnit[]
}