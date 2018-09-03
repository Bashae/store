import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input() header: string = "North Central";

  constructor() {
  }

}
