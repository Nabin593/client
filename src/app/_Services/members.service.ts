import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/Member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'Users', this.getHttpOptions())
  }

  getMember(Username: string){
    return this.http.get<Member[]>(this.baseUrl + 'Users/' + Username, this.getHttpOptions())
  }

  // getHttpOptions(){
  //   const userString = localStorage.getItem('user');
  //   if(!userString) return;
  //   const user = JSON.parse(userString);
  //   return{
  //     Headers: new HttpHeaders({
  //       Authorization: 'Bearer ' + user.token
  //     })
  //   };
  // }
  getHttpOptions() {
    const userString = localStorage.getItem('user');
    let headers = new HttpHeaders();

    if (userString) {
      const user = JSON.parse(userString);
      headers = headers.set('Authorization', 'Bearer ' + user.token);
    }

    return { headers };
  }
}
