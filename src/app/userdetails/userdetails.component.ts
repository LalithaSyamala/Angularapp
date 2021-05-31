import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  details;
  constructor(private ar:ActivatedRoute,private ds:DataService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of post with this current id
    this.ds.getUserById(id).subscribe(
      obj=>{
        console.log("obj is ",obj)
        this.details=obj;
      },
      err=>{
        console.log("err in reading post",err)
      }
    )

  }

}
