import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input() header: string = "North Central";
  employeeID: string = "127638435";
  employeeMaxID: string = "034565";

  constructor() {
    this.employeeID = "127638435";
    this.employeeMaxID = "034565";
  }
}
