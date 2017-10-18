import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { equalizerPage } from '../pages/equalizer/equalizer';
import { settingPage } from '../pages/setting/setting';
import { storePage } from '../pages/store/store';
import { SortPopoverPage } from '../pages/sort-popover/sort-popover';
import { TrackMorePopoverPage } from '../pages/track-more-popover/track-more-popover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    equalizerPage,
    settingPage,
    storePage,
    SortPopoverPage,
    TrackMorePopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    equalizerPage,
    settingPage,
    storePage,
    SortPopoverPage,
    TrackMorePopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
