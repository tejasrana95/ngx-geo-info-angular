import { NgModule } from '@angular/core';
import { NgxGeoCoordinatesInfo } from './ngx-geo-info-angular';
import * as i0 from "@angular/core";
export function NgxGeoCoordinatesInfoFactory() {
    return new NgxGeoCoordinatesInfo();
}
;
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
export { NgxGeoCoordinatesInfoModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxGeoCoordinatesInfoModule, [{
        type: NgModule,
        args: [{
                providers: [
                    {
                        provide: NgxGeoCoordinatesInfo,
                        useFactory: NgxGeoCoordinatesInfoFactory
                    }
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=ngx-geo-info-angular.module.js.map