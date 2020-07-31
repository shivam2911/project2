import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
th = 'http://localhost:3000/news';
  constructor(private http:HttpClient) { }
enroll(user:User){
  console.log(user)
  return this.http.post<any>(this.th,user);
}
}