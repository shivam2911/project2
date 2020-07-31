import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
th = 'http://localhost:3000/posts';
  constructor(private http:HttpClient) { }
enroll(user:User){
  console.log(user)
  return this.http.post<any>(this.th,user);
}
get(){
  return this.http.get<any>(this.th);
}
delete(userId)
{
  return this.http.delete<any>(this.th+'/'+userId) ;
}
/*put(userId){
  return this.http.put<any>(this.th+'/'+userId)
}*/
geti(userId){
  return this.http.get<any>(this.th+'/'+userId);}

}
