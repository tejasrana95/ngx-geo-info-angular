export declare class NgxGeoCoordinatesInfo {
    gotdevice: any;
    constructor();
    getCurrentLocation(options: any): Promise<any>;
    get(type: string): Promise<any>;
    getAll(): Promise<any>;
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
