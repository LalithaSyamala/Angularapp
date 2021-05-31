import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  mySubscription:Subscription;

  users;
  //inject Fakedata service object
  constructor(private router:Router,private usObj:DataService) { }

  onSelectId(id){
    this.router.navigateByUrl('users/'+id)
  }


  ngOnInit(): void {
   this.mySubscription= this.usObj.getUser().subscribe(
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
