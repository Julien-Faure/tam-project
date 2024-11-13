import {TamService} from "@/services/TamService";


export class TamServiceImpl implements TamService {

    private readonly srcFile;


    constructor(srcFile: string) {
        this.srcFile = srcFile;
    }

    async getLines(): Promise<string[]> {

        return Promise.resolve([]);
    }

}