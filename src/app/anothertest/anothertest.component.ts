import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-anothertest',
  templateUrl: './anothertest.component.html',
  styleUrls: ['./anothertest.component.css']
})
export class AnothertestComponent implements OnInit , OnDestroy{

  mySubscription:Subscription;

  users;
  user;
  //inject Fakedata service object
  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
   this.mySubscription= this.dsObj.getUsers1().subscribe(
      userData=>{
        //assign posts
        this.users=userData;   
        this.user=userData.data; 
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
