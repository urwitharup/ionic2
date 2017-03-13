import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the Services provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Services {

  http:any;
  baseurl:String;

  constructor( http: Http) {
    this.http = http;
    this.baseurl = "https://www.reddit.com/r";
    console.log('Hello Services Provider');
  }

  getPosts(category,limit){
  
    return this.http.get(this.baseurl+'/'+category+'/top.json?limit='+limit).map(res => res.json());

  }

}
