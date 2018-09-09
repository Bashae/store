import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  store: {
    address: string;
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator) {
    this.store = navParams.get('store');
  }

  goToLocation() {
    if(this.store.address) {
      this.launchNavigator.navigate('Mattress Firm ' + this.store.address)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
    }
  }

  goBackPage() {
    this.navCtrl.pop();
  }

}
