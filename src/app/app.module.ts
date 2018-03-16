import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ResultsListPage } from '../pages/results/results';
import { TwitterSearchService } from './twitter-search.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultsListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultsListPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TwitterSearchService
  ]
})
export class AppModule {}
