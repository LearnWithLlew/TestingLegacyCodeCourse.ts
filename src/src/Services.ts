import {ThirdPartyCode} from "./ThirdPartyCode";

export class Services {

    public static restCall( url:string, action: string, key: number) {
    return ThirdPartyCode.restCall(url, action, key);
}

public static initialiseServices() {
    let key = ThirdPartyCode.getSecurityKey();
    let result = this.restCall("https://postgresdatabase.acme.com", "start", key);
    if (result == 200) {
        key = key + 100;
        result = this.restCall("https://kafka.acme.com", "subscribe", key);
        if (result == 200) {
            result = this.restCall("https://cache.acme.com", "load", key);
            if (result != 200) {
                throw new Error("Error starting cache");
            }
            result = this.restCall("https://search.acme.com", "index", key);
            if (result != 200) {
                throw new Error("Error indexing search");
            }
            result = this.restCall("https://creditcardprocessor.acme.com", "charge", key);
            if (result != 200) {
                throw new Error("Error charging credit card");
            }
        }
    }
}
}