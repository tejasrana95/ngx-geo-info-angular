(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global['ngx-geo-info-angular'] = global['ngx-geo-info-angular'] || {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

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
    NgxGeoCoordinatesInfo.ɵfac = function NgxGeoCoordinatesInfo_Factory(t) { return new (t || NgxGeoCoordinatesInfo)(); };
    NgxGeoCoordinatesInfo.ɵprov = i0.ɵɵdefineInjectable({ token: NgxGeoCoordinatesInfo, factory: NgxGeoCoordinatesInfo.ɵfac });
    return NgxGeoCoordinatesInfo;
}());
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxGeoCoordinatesInfo, [{
        type: i0.Injectable
    }], function () { return []; }, null); })();
var CoodinatesResponse = /** @class */ (function () {
    function CoodinatesResponse(data) {
        this.status = data.status || '';
        this.message = data.message || '';
        this.data = data.data || '';
    }
    return CoodinatesResponse;
}());
var AllCoodinatesResponse = /** @class */ (function () {
    function AllCoodinatesResponse(data) {
        this.status = data.status || '';
        this.message = data.message || '';
        this.data = data.data || new GeoCoodination({});
    }
    return AllCoodinatesResponse;
}());
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

function NgxGeoCoordinatesInfoFactory() {
    return new NgxGeoCoordinatesInfo();
}

var NgxGeoCoordinatesInfoModule = /** @class */ (function () {
    function NgxGeoCoordinatesInfoModule() {
    }
    NgxGeoCoordinatesInfoModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxGeoCoordinatesInfoModule });
    NgxGeoCoordinatesInfoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxGeoCoordinatesInfoModule_Factory(t) { return new (t || NgxGeoCoordinatesInfoModule)(); }, providers: [
            {
                provide: NgxGeoCoordinatesInfo,
                useFactory: NgxGeoCoordinatesInfoFactory
            }
        ] });
    return NgxGeoCoordinatesInfoModule;
}());
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxGeoCoordinatesInfoModule, [{
        type: i0.NgModule,
        args: [{
                providers: [
                    {
                        provide: NgxGeoCoordinatesInfo,
                        useFactory: NgxGeoCoordinatesInfoFactory
                    }
                ]
            }]
    }], null, null); })();

exports.NgxGeoCoordinatesInfoModule = NgxGeoCoordinatesInfoModule;
exports.NgxGeoCoordinatesInfo = NgxGeoCoordinatesInfo;

Object.defineProperty(exports, '__esModule', { value: true });

})));
