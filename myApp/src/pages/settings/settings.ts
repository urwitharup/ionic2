import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  category:any;
  limit:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.getDefaults();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  getDefaults(){
     this.category="sports";
     this.limit=5;
  }

  setDefaults(){
    console.log('setDefault Function is called');
    localStorage.setItem('category',this.category);
    localStorage.setItem('limit',this.limit);
    this.navCtrl.push(HomePage);
  }

}
