
const JWT = 'JWT';
export default class Session {


    static hasToken() : boolean {
        return localStorage.getItem(JWT) != null;
    }
    static setToken(token : string) : void {
        localStorage.setItem(JWT, token);
    }

    static getToken() : string {
        return localStorage.getItem(JWT)!;
    }

    static resetToken() : void{
        localStorage.removeItem(JWT);
    }
}