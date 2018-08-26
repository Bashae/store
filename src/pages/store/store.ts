import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  store: {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.store = navParams.get('store');
    console.log(this.store);
  }

}
