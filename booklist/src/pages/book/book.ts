import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Book page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

  title:any;
  author:any;
  books:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, angfire:AngularFire) {
    this.books=angfire.database.list('books');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

  addBook(){
    console.log('addBook1 function is called'+this.title+' and ' + this.author);
    this.books.push({title:this.title,author:this.author});
    //this.navCtrl.push(HomePage);
  }

}
