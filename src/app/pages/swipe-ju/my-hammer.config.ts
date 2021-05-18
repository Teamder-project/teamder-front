import { HammerGestureConfig } from "@angular/platform-browser";
import * as hammer from "hammerjs";

import { Component } from '@angular/core';
 

@Component({
    selector: 'app-swipe-ju',
    templateUrl: './swipe-ju.component.html',
    styleUrls: ['./swipe-ju.component.css']
  })

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: hammer.DIRECTION_HORIZONTAL },
    pinch: { enable: false },
    rotate: { enable: false }
  };
}