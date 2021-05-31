import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Inject HttpClient obj
  constructor(private hc:HttpClient) { }

  getUsers1():Observable<any>{
    return this.hc.get<any>('https://reqres.in/api/unknown')
  }

  //mobiles products

  getMobiles():Observable<product>{
    return this.hc.get<product>('http://localhost:3000/mobiles')
  }

  //bikes products

  getBikes():Observable<product>{
    return this.hc.get<product>('http://localhost:3000/bikes')
  }
  
  //telivisions products
  getTelivisions():Observable<product>{
    return this.hc.get<product>('http://localhost:3000/telivisions')
  }

  //user 
  getUser():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users')
  }

  //userdetails
  getUserById(id):Observable<any>{
    return this.hc.get('http://localhost:3000/users/'+id)
 }

  getUsers():Observable<any>{
   return this.hc.get<any>("https://jsonplaceholder.typicode.com/users")
  }




}
