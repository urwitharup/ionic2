import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookPage } from '../pages/book/book';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAt7UzBVR8J9CLGBrM__alnB7HNk1nUjJ8",
    authDomain: "my-booklist-daac3.firebaseapp.com",
    databaseURL: "https://my-booklist-daac3.firebaseio.com",
    storageBucket: "my-booklist-daac3.appspot.com",
    messagingSenderId: "488717289857"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
