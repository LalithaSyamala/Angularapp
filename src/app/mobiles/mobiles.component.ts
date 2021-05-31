import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit,OnDestroy{

  mySubscription:Subscription;
mobiles;
//inject object of mobile service
constructor(private msobj:DataService){}

ngOnInit(): void {
  this.mySubscription= this.msobj.getMobiles().subscribe(
     userData=>{
       //assign posts
       this.mobiles=userData;     
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
