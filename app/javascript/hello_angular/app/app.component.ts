import { Component } from '@angular/core';

import {MountainService} from '../services/mountain_service';

@Component({
  selector: 'hello-angular',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent {
  
  mountains: any;
  constructor(private _mountain: MountainService) {
    this.mountains = _mountain.getMountains();
  }
  name = 'Angular!';

  

}
