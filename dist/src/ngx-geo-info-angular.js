var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var NgxGeoCoordinatesInfo = /** @class */ (function () {
    function NgxGeoCoordinatesInfo() {
        this.gotdevice = {};
    }
    NgxGeoCoordinatesInfo.prototype.getCurrentLocation = function (options) {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, function (_a) {
                var code = _a.code, message = _a.message;
                return reject(Object.assign(new Error(message), { name: "PositionError", code: code }));
            }, options);
        });
    };
    NgxGeoCoordinatesInfo.prototype.get = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getCurrentLocation({}).then(function (value) {
                var returnResponse = new CoodinatesResponse({});
                returnResponse.status = 'success';
                returnResponse.message = '';
                if (type === 'timestamp') {
                    returnResponse.data = value['timestamp'];
                }
                else {
                    returnResponse.data = value['coords'][type];
                }
                resolve(returnResponse);
            }, function (err) {
                var returnResponse = new CoodinatesResponse({});
                returnResponse.status = 'error';
                returnResponse.message = err.message;
                returnResponse.data = '';
                reject(returnResponse);
            });
        });
    };
    NgxGeoCoordinatesInfo.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getCurrentLocation({}).then(function (value) {
                var returnResponse = new AllCoodinatesResponse({});
                returnResponse.status = 'success';
                returnResponse.message = '';
                returnResponse.data.timestamp = value['timestamp'];
                returnResponse.data = value['coords'];
                resolve(returnResponse);
            }, function (err) {
                var returnResponse = new AllCoodinatesResponse({});
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
    };
    NgxGeoCoordinatesInfo = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], NgxGeoCoordinatesInfo);
    return NgxGeoCoordinatesInfo;
}());
export { NgxGeoCoordinatesInfo };
var CoodinatesResponse = /** @class */ (function () {
    function CoodinatesResponse(data) {
        this.status = data.status || '';
        this.message = data.message || '';
        this.data = data.data || '';
    }
    return CoodinatesResponse;
}());
export { CoodinatesResponse };
var AllCoodinatesResponse = /** @class */ (function () {
    function AllCoodinatesResponse(data) {
        this.status = data.status || '';
        this.message = data.message || '';
        this.data = data.data || new GeoCoodination({});
    }
    return AllCoodinatesResponse;
}());
export { AllCoodinatesResponse };
var GeoCoodination = /** @class */ (function () {
    function GeoCoodination(data) {
        this.accuracy = data.accuracy || '';
        this.altitude = data.altitude || '';
        this.altitudeAccuracy = data.altitudeAccuracy || '';
        this.heading = data.heading || '';
        this.latitude = data.latitude || '';
        this.longitude = data.longitude || '';
        this.speed = data.speed || '';
        this.timestamp = data.timestamp || '';
    }
    return GeoCoodination;
}());
export { GeoCoodination };
//# sourceMappingURL=ngx-geo-info-angular.js.map