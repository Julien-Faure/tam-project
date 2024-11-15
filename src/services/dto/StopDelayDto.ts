export interface StopDelayDto {
    id: string,
    nom: string,
    direction: boolean,
    logical_stop : string,
    next_pass: {
        time: string
    }
}