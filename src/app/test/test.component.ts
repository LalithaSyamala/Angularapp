import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  
  mySubscription:Subscription;

  users;
  //inject Fakedata service object
  constructor(private fsObj:DataService) { }

  ngOnInit(): void {
   this.mySubscription= this.fsObj.getUsers().subscribe(
      userData=>{
        //assign posts
        this.users=userData;     
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
