/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './ngx-geo-info-angular.module';
import * as import2 from '@angular/core/src/di/injector';
import * as import3 from './ngx-geo-info-angular';
class NgxGeoCoordinatesInfoModuleInjector extends import0.NgModuleInjector<import1.NgxGeoCoordinatesInfoModule> {
  _NgxGeoCoordinatesInfoModule_0:import1.NgxGeoCoordinatesInfoModule;
  __NgxGeoCoordinatesInfo_1:any;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgxGeoCoordinatesInfo_1():any {
    if ((this.__NgxGeoCoordinatesInfo_1 == null)) { (this.__NgxGeoCoordinatesInfo_1 = import1.NgxGeoCoordinatesInfoFactory()); }
    return this.__NgxGeoCoordinatesInfo_1;
  }
  createInternal():import1.NgxGeoCoordinatesInfoModule {
    this._NgxGeoCoordinatesInfoModule_0 = new import1.NgxGeoCoordinatesInfoModule();
    return this._NgxGeoCoordinatesInfoModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.NgxGeoCoordinatesInfoModule)) { return this._NgxGeoCoordinatesInfoModule_0; }
    if ((token === import3.NgxGeoCoordinatesInfo)) { return this._NgxGeoCoordinatesInfo_1; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const NgxGeoCoordinatesInfoModuleNgFactory:import0.NgModuleFactory<import1.NgxGeoCoordinatesInfoModule> = new import0.NgModuleFactory(NgxGeoCoordinatesInfoModuleInjector,import1.NgxGeoCoordinatesInfoModule);