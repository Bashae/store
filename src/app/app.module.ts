import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StorePage } from '../pages/store/store';
import { StoreListPage } from '../pages/store-list/store-list';
import { EmployeePage } from '../pages/employee/employee';
import { EmployeeListPage } from '../pages/employee-list/employee-list';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

import { HeaderComponent } from '../components/header/header';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StorePage,
    StoreListPage,
    EmployeePage,
    EmployeeListPage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StorePage,
    StoreListPage,
    EmployeePage,
    EmployeeListPage,
    HeaderComponent
  ],
  providers: [
    LaunchNavigator,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
