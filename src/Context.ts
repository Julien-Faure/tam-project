import getEnv from "@/utils/Environment";
import {TamService} from "@/services/TamService";
import {isUndefined} from "@/utils/Types";
import {TamServiceImpl} from "@/services/TamServiceImpl";

export class Context {

    private static readonly tamDataSrc = getEnv("VUE_APP_TAM_API_URL") || "http://localhost:3000";

    private static tamService?: TamService;

    public static provideTamService(): TamService {
        if (isUndefined(this.tamService)) {
            this.tamService = new TamServiceImpl(this.tamDataSrc);
        }
        return this.tamService!;
    }

}