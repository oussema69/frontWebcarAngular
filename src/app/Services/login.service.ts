import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url=environment.Api
constructor(public http:HttpClient) { }
login(data:any){
  return this.http.post(this.url+"login", data);

}
register(data:any){
  return this.http.post(this.url+"register", data);

}

}
