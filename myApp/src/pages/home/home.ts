import { Component } from '@angular/core';
import {Services} from '../../providers/services'
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
items:any;
category:any;
limit:any;

  constructor(public navCtrl: NavController,private services:Services) {
  this.setDefaults();
  }

setDefaults()
{
  if(localStorage.getItem('category') == null){
      this.category="food";
  }else{
    this.category= localStorage.getItem('category');
  }
  
  if(localStorage.getItem('limit') == null){
      this.limit=5;
  }else{
    this.limit= localStorage.getItem('limit');
  }
}

ngOnInit(){
this.getPosts(this.category,this.limit);
}

getPosts(category,limit){
this.services.getPosts(category,limit).subscribe(response => {
  this.items = response.data.children;
})
}

viewItem(item){
  this.navCtrl.push(DetailsPage,{item:item})
}

changeCategory(){
  console.log('changeCategory is called');
  this.getPosts(this.category,this.limit);
}

}
