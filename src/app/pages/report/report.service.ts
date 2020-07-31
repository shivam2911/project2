import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
//import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
th = 'http://localhost:3000/posts/graph/qwer';
  constructor(private http:HttpClient) { }
/*enroll(user:User){
  return this.http.post<any>(this.th,user);
}*/
get(){
  return this.http.get<any>(this.th);
}

}