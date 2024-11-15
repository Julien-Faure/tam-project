import {StopDelayDto} from "@/services/dto/StopDelayDto";

export interface TestDto {
    stops : {
        [key : string] : StopDelayDto
    }
}