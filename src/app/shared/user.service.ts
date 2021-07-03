import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public newUser: User = {
  pname:'',
  pdetails:'',
  phight:'',
  pwidth:'',
  ptype:'',
  pstatus:true,
  }



  constructor( private http:HttpClient ) { }

  addproduct(product:User)
  {
    return this.http.post('http://localhost:3000/newproduct',product);
  }


}
