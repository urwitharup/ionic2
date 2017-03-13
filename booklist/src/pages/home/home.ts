import { Component } from '@angular/core';
import { BookPage } from '../book/book';

import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  books:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, angfire:AngularFire) {

    this.books=angfire.database.list('books');
    
  }

  addBook(){
    console.log('addBook method is called');
    this.navCtrl.push(BookPage);
  }

}
