import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-employee-list',
  templateUrl: 'employee-list.html',
})
export class EmployeeListPage {
  employeeList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.employeeList = [
      {name: "Meagan Murphy", number: "(123) 123-1234", location: "14", title: "MDM"},
      {name: "Andrew Ice", number: "(123) 123-1234", location: "14", title: "MIT"},
      {name: "Karston Grant", number: "(123) 123-1234", location: "14", title: "AM"},
      {name: "Heather Mead", number: "(123) 123-1234", location: "14", title: "SM"}
    ]
  }

}
