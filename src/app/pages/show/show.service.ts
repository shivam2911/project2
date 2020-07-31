import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
th = 'http://localhost:3000/news';
  constructor(private http:HttpClient) { }
  enroll(user,userId){
    console.log(user)
    return this.http.put<any>(this.th+'/'+userId,user);
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
