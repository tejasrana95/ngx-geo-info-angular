import { Injectable } from '@angular/core';

@Injectable()
export class NgxGeoCoordinatesInfo {
    gotdevice: any = {};


    public constructor() {

    }

    getCurrentLocation(options: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            navigator.geolocation.getCurrentPosition(resolve, ({ code, message }) =>
                reject(Object.assign(new Error(message), { name: "PositionError", code })),
                options);
        });
    }
    get(type: string): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.getCurrentLocation({}).then(value => {
                const returnResponse: CoodinatesResponse = new CoodinatesResponse({});
                returnResponse.status = 'success';
                returnResponse.message = '';
                if (type === 'timestamp') {
                    returnResponse.data = value['timestamp'];
                } else {
                    returnResponse.data = value['coords'][type];
                }
                resolve(returnResponse);
            }, (err) => {
                const returnResponse: CoodinatesResponse = new CoodinatesResponse({});
                returnResponse.status = 'error';
                returnResponse.message = err.message;
                returnResponse.data = '';
                reject(returnResponse);
            });
        });

    }

    getAll(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.getCurrentLocation({}).then(value => {
                const returnResponse: AllCoodinatesResponse = new AllCoodinatesResponse({});
                returnResponse.status = 'success';
                returnResponse.message = '';
                returnResponse.data.timestamp = value['timestamp'];
                returnResponse.data = value['coords'];
                resolve(returnResponse);
            }, (err) => {
                const returnResponse: AllCoodinatesResponse = new AllCoodinatesResponse({});
                returnResponse.status = 'error';
                returnResponse.message = err.message;
                returnResponse.data.accuracy = 0;
                returnResponse.data.altitude = 0;
                returnResponse.data.altitudeAccuracy = 0;
                returnResponse.data.heading = '0';
                returnResponse.data.latitude = 0;
                returnResponse.data.longitude = 0;
                returnResponse.data.speed = 0;
                returnResponse.data.timestamp = '0';
                reject(returnResponse);
            });
        });

    }
}

export class CoodinatesResponse {
    status: string;
    message: string;
    data: any;

    constructor(data: any) {
        this.status = data.status || '';
        this.message = data.message || '';
        this.data = data.data || '';
    }
}
export class AllCoodinatesResponse {
    status: string;
    message: string;
    data: GeoCoodination;

    constructor(data: any) {
        this.status = data.status || '';
        this.message = data.message || '';
        this.data = data.data || new GeoCoodination({});
    }
}
export class GeoCoodination {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: string;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: string;
    constructor(data: any) {
        this.accuracy = data.accuracy || '';
        this.altitude = data.altitude || '';
        this.altitudeAccuracy = data.altitudeAccuracy || '';
        this.heading = data.heading || '';
        this.latitude = data.latitude || '';
        this.longitude = data.longitude || '';
        this.speed = data.speed || '';
        this.timestamp = data.timestamp || '';

    }
}