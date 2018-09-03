import { Component } from '@angular/core';

import { HomePage } from '../../pages/home/home';
import { EmployeeListPage } from '../../pages/employee-list/employee-list';
import { StoreListPage } from '../../pages/store-list/store-list';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(public navCtrl: NavController) {
  }

  goToPage(page) {
    if(page === 'home') {this.navCtrl.setRoot(HomePage)}
    if(page === 'contacts') {this.navCtrl.setRoot(EmployeeListPage)}
    if(page === 'stores') { this.navCtrl.setRoot(StoreListPage) }
  }

}
