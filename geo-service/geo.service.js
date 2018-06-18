import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

var GeoService = (function () {
    function GeoService() {
        if (!navigator.geolocation) {
            return { status: 'error', code: 1001, message: 'Geolocation is not supported by your browser', name: 'NonCompatibleBrowser' };
        }
    }

    function getCurrentLocation(options) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, ({ code, message }) =>
                reject(Object.assign(new Error(message), { name: "PositionError", code })),
                options);
        });
    };

    GeoService.prototype.get = async function (name) {
        if (navigator.geolocation) {
            try {
                const geoData = await getCurrentLocation();
                if (name === "timestamp") {
                    return { status: 'success', geoData: geoData.timestamp };
                } else {
                    return { status: 'success', geoData: geoData.coords[name] };
                }
            } catch (e) {
                return { status: 'error', code: e.code, message: e.message, name: e.name };
            }
        }
        else {
            return { status: 'error', code: 1001, message: 'Geolocation is not supported by your browser', name: 'NonCompatibleBrowser' };
        }
    };

    GeoService.prototype.getAll = async function () {
        if (navigator.geolocation) {
            try {
                let allData = {};
                const geoData = await getCurrentLocation();
                allData = geoData.coords;
                allData['timestamp'] = geoData.timestamp;
                return { status: 'success', geoData: allData };
            } catch (e) {
                return { status: 'error', code: e.code, message: e.message, name: e.name };
            }
        } else {
            return { status: 'error', code: 1001, message: 'Geolocation is not supported by your browser', name: 'NonCompatibleBrowser' };
        }
    };
    return GeoService;
}());
export { GeoService };
GeoService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GeoService.ctorParameters = function () {
    return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ];
};
//# sourceMappingURL=geo.service.js.map