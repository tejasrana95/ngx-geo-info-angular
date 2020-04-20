import * as i0 from "@angular/core";
export declare class NgxGeoCoordinatesInfo {
    gotdevice: any;
    constructor();
    getCurrentLocation(options: any): Promise<any>;
    get(type: string): Promise<any>;
    getAll(): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDef<NgxGeoCoordinatesInfo, never>;
    static ɵprov: i0.ɵɵInjectableDef<NgxGeoCoordinatesInfo>;
}
export declare class CoodinatesResponse {
    status: string;
    message: string;
    data: any;
    constructor(data: any);
}
export declare class AllCoodinatesResponse {
    status: string;
    message: string;
    data: GeoCoodination;
    constructor(data: any);
}
export declare class GeoCoodination {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: string;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: string;
    constructor(data: any);
}
