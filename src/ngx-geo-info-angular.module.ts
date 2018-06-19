import { NgModule } from '@angular/core';

import { NgxGeoCoordinatesInfo } from './ngx-geo-info-angular';

export function NgxGeoCoordinatesInfoFactory() {

    return new NgxGeoCoordinatesInfo();

};

@NgModule({
    providers: [
        {
            provide: NgxGeoCoordinatesInfo,
            useFactory: NgxGeoCoordinatesInfoFactory 
        }
    ]
})
export class NgxGeoCoordinatesInfoModule {}