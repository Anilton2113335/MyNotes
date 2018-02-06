import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { textEditorPage } from '../pages/textEditor/textEditor';
import { ArrayHolder } from '../pages/classOfArray/ArrayHolder';  
import { ViewEditPage } from '../pages/viewEdit/viewEdit';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    textEditorPage,
    ViewEditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    textEditorPage,
    ViewEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ArrayHolder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
