import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit,OnDestroy{

  mySubscription:Subscription;
  bikes;
  //inject object of mobile service
  constructor(private bsobj:DataService){}
  
  ngOnInit(): void {
    this.mySubscription= this.bsobj.getBikes().subscribe(
       userData=>{
         //assign posts
         this.bikes=userData;     
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
