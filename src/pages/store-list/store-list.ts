import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StorePage } from '../store/store';

@IonicPage()
@Component({
  selector: 'page-store-list',
  templateUrl: 'store-list.html',
})
export class StoreListPage {
  stores: any[];
  
  constructor(public navCtrl: NavController) {
    this.stores = [
      {
        address: '9711 Northlake Center Pkwy',
        address2: 'Charlotte NC, 28216',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024014',
        telephone: '(704) 921-6524'
      },
      {
        address: '478 River Highway',
        address2: 'Mooresville NC, 28117',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024020',
        telephone: '(704) 664-6445'
      },
      {
        address: '239 South Kings Drive',
        address2: 'Charlotte NC, 28204',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024021',
        telephone: '(704) 376-2075'
      },
      {
        address: '9605 Sam Furr Road',
        address2: 'Huntersville NC, 28078',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024022',
        telephone: '(704) 892-4530'
      },
      {
        address: '717 S. Kings Drive',
        address2: 'Charlotte NC, 28204',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024050',
        telephone: '(704) 335-0320'
      },
      {
        address: '9304 Northlake Dr',
        address2: 'Charlotte NC, 28216',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024056',
        telephone: '(704) 391-5260'
      },
      {
        address: '9826 Gilead Rd',
        address2: 'Huntersville NC, 28078',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024173',
        telephone: '(704) 875-7803'
      },
      {
        address: '610 Jetton St Ste 110',
        address2: 'Davidson NC, 28117',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024178',
        telephone: '(704) 895-7327'
      },
      {
        address: '168 Norman Station Blvd',
        address2: 'Mooresville NC, 28117',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024179',
        telephone: '(704) 658-9196'
      },
      {
        address: '19930 W. Catawba Ave',
        address2: 'Cornelius NC, 28031',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024191',
        telephone: '(704) 987-5068'
      },
      {
        address: '1337 Wood Brand Dr',
        address2: 'Charlotte NC, 28273',
        image: 'assets/imgs/mfrm-store.jpg',
        number: '024000',
        telephone: '(704) 588-8770'
      }
    ]
  }

  goToStore(store) {
    if(store) {
      this.navCtrl.push(StorePage, {
        store: store
      });
    }
  }

}
