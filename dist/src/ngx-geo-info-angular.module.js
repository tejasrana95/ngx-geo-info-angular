import { NgModule } from '@angular/core';
import { NgxGeoCoordinatesInfo } from './ngx-geo-info-angular';
export function NgxGeoCoordinatesInfoFactory() {
    return new NgxGeoCoordinatesInfo();
}
;
export var NgxGeoCoordinatesInfoModule = (function () {
    function NgxGeoCoordinatesInfoModule() {
    }
    NgxGeoCoordinatesInfoModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        {
                            provide: NgxGeoCoordinatesInfo,
                            useFactory: NgxGeoCoordinatesInfoFactory
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxGeoCoordinatesInfoModule.ctorParameters = function () { return []; };
    return NgxGeoCoordinatesInfoModule;
}());
//# sourceMappingURL=ngx-geo-info-angular.module.js.map