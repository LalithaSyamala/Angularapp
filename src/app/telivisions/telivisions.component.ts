import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-telivisions',
  templateUrl: './telivisions.component.html',
  styleUrls: ['./telivisions.component.css']
})
export class TelivisionsComponent implements OnInit,OnDestroy{
  
  mySubscription:Subscription;
  telivisions;
  //inject object of mobile service
  constructor(private tsobj:DataService){}
  
  ngOnInit(): void {
    this.mySubscription= this.tsobj.getTelivisions().subscribe(
       userData=>{
         //assign posts
         this.telivisions=userData;     
       },
       err=>{
         console.log("err in getting posts data",err)
       }
  
     )
   }
     ngOnDestroy(){
       this.mySubscription.unsubscribe();
     }
  


}
