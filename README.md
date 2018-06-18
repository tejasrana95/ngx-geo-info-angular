An (AOT ready) Angular (4+) service for Geo coordination.

# Installation

```bash
npm install ngx-geo-info-angular --save

```

Add the cookie service to your `app.module.ts` as a provider:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeoService } from 'ngx-geo-info-angular';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FormsModule, HttpModule ],
  providers: [ GeoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

Then, import and inject it into a component:

```typescript
import { Component, OnInit } from '@angular/core';
import { GeoService } from 'ngx-geo-info-angular';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  cookieValue = 'UNKNOWN';

  constructor( private geoService: GeoService ) { }

  ngOnInit(): void {
    this.geoService.getAll().then(value => {
      console.log(value);
    });
    this.geoService.get('latitude').then(value => {
      console.log(value);
    });
    this.geoService.get('longitude').then(value => {
      console.log(value);
    });
  }
}
```

That's it!

# Methods

## get( name: string ): string;

```typescript
this.geoService.get('latitude').then(value => {
      console.log(value);
});
```

## getAll(): {};

```typescript
this.geoService.getAll().then(value => {
      console.log(value);
});
```
# Parameter
accuracy : <number>
altitude : <it work if your browser support>
altitudeAccuracy : <it work if your browser support>
heading : <it work if your browser support>
latitude : <double/float>
longitude : <double/float>
speed : <it work if your browser support>
timestamp : <number (TimeStamp) when you get the information>

# Error Response
status : error
code: if you get error
message: Error Message
name: Error Name

# Success Response
status: success
geoData: number if you call get function else return all coordination object

# Author

This Geo service is brought to you by [Tejas Rana](https://www.tejasrana.com/). I built this because I need Geoinformation of the user. and make it in component basis makes me hard to manage. So I built the module and other Users can also use it easily.

Check out the [GitHub page](https://github.com/tejasrana95/ngx-geo-info-angular) for more.
