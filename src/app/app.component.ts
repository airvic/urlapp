import { Component } from '@angular/core';
import {NgTinyUrlService} from 'ng-tiny-url';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Link = ""
  shorten_url = ' ';
  shorten = false;
  storedlink1 = "";
  storedlink2 ="";
  data1:any;
  data2:any;
  shorten_msg = false;
  l:any;
  l2:any
     val: any = [];

  constructor(public tinyurl:NgTinyUrlService){
   
  }
  ngOnInit(){
    this.getlinks()
    // localStorage.setItem('values',JSON.stringify(this.val))
  }
submit(e:any){
  if(this.Link == ''){
    this.shorten  = false
  this.shorten_msg = true;
      this.tinyurl.shorten(this.Link).subscribe(res => {
    this.shorten_url = res;

    this.val.push(localStorage.setItem(this.Link,JSON.stringify({
      'name': this.shorten_url
    })));

    console.log(this.val)
    console.log(this.Link,this.shorten_url)
  
    this.shorten = true
    console.log(res);
  });
   
  }
 

}
getlinks(){
// let l:any  = localStorage.getItem('val')
//  this.l2 = JSON.parse(l)
//  console.log(this.l2)

console.log(localStorage)
console.log(this.val)
this.l2 = localStorage

}

clearstorage(e:any)
{
  localStorage.clear()
}


}
